import { useAsync } from "react-async-hook";
import { fetchApiPokemon } from "../../api";


import { Card } from 'primereact/card';
 
import { ListBox } from 'primereact/listbox';
import { useState } from 'react';


export const PokeList = () => {

    const [selectd, setSelectd] = useState<string|null>(null);

    const {loading, error, result } =  useAsync(fetchApiPokemon, []);

    const newData = result?.results.map( poke => ({
        label: poke.name,
        code: poke.name,
        items: [
            {label: poke.url, value: poke.url}
        ]
    }))
    

  return (
    <div>

        {
            (selectd !== null ) && (

                <Card>
                    {selectd}
                </Card>
            )
        }
        
    <ListBox 
        className={`
            mt-4
        `}
        value={selectd} 
        // value={result?.results[0].url} 
        options={newData} 
        onChange={(e) => setSelectd(e.value)} 
        optionLabel="label" 
        optionGroupLabel="label" 
        optionGroupChildren="items" 
        
    />
 

 

        
    </div>
  )
}
