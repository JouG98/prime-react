
import { useAsyncExecutor } from 'async-executor-hook';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { map, of, pluck, tap } from 'rxjs';
import { RestApi } from '../../api';
import { Datum } from '../../interfaces';
 

export const CardOA = () => {

  const dataApi = useAsyncExecutor( 
    ()=>{
      return RestApi.get().pipe(
        pluck('data'),
        tap(console.log),
        // tap((a) => {console.log(a)}),
        map( (d: Datum) => {
          console.log( typeof d);
          return {id: d.id}
        }),
        tap(console.log),

        // map( (d)=> ({
        //   id: d.id,
        //   type: d.type,
        //   name: d.attributes.canonicalTitle,
        //   date_start: d.attributes.startDate,
        //   date_end: d.attributes.endDate,
        //   n_cap: d.attributes.episodeCount,
        //   img: d.attributes.posterImage.medium,
        //   status: d.attributes.status,
        //   sipnosis: d.attributes.synopsis
        // })),

        // tap(console.log),
      )

    },
    {
      source$: of({}),
      onSuccess: () => {
        console.log('bien');
      },

      onError: () => {
        console.log('error');
      }

    }
  );

  // console.log(dataApi)
  return (
    <div>


      <Card 
        title="Advanced Card" 
        subTitle="Subtitle" 
        style={{ 
          width: '250px',
          backgroundColor:' #F6F8FC',
          // padding: '1rem'
        }} 
        header={<img alt="Card" src='images/usercard.png'/>}
      >
          <p 
            className="m-0" 
            style={{lineHeight: '1.5'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
      </Card>
    </div>
  )
}






 