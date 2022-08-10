import { FC } from "react"
import { CardOA, MainLayout } from "../components"
import { IPropsPages } from "../interfaces"


export const ObservableApi: FC<IPropsPages> = ({title}) => {
  return (
    <MainLayout
        title={title}
    >
        <div 
            className={`
                flex
                flex-wrap 
                card-container
                mt-4
            `}
            style={{
                // maxWidth: '250px'
            }}
        >
        <CardOA/>
    

        </div>

    </MainLayout>
  )
}
