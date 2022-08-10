import { ProgressSpinner } from "primereact/progressspinner";
import { useAsyncExecutor } from "async-executor-hook";
import { Card } from "primereact/card";
import { ListBox } from "primereact/listbox";
import { useState } from "react";
import { map, of, pluck, tap } from "rxjs";
import { RestApi } from "../../api/restApi";
import { IRespAPIPokemon, Result } from "../../interfaces";

export const PokeList = () => {
  const [selectd, setSelectd] = useState<string | null>(null);
  const [count, setcount] = useState(0);

  const searchPokemon = useAsyncExecutor(
    (params) => {
      return RestApi.get("api/v1/employees/").pipe(
        tap(console.log),
        tap((resp: IRespAPIPokemon) => setcount(resp.count)),
        pluck("results"),
        map((item: Result[]) => {
          return item.map((poke: any) => ({
            label: poke.name,
            code: poke.name,
            items: [{ label: poke.url, value: poke.url }],
          }));
        })
      );
    },
    {
      source$: of({}),
      onSuccess: (resp, params) => {
        if (resp.length === 0) {
          console.log("no hay datos");
        }
      },
      onError: (error, params) => {
        console.log(error);
        console.log("MAL");
      },
    }
  );

  return (
    <div>
      {searchPokemon.status === "PROCESSING" && <ProgressSpinner />}
      {searchPokemon.status === "SUCCESS" && (
        <>
          {selectd !== null && <Card>{selectd}</Card>}
          {count}
          <ListBox
            className={`
            mt-4
        `}
            value={selectd}
            options={searchPokemon.data}
            onChange={(e) => setSelectd(e.value)}
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="items"
          />
        </>
      )}
    </div>
  );
};
