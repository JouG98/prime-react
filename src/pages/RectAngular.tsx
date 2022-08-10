import { FC } from "react"
import { FormRA, MainLayout } from "../components"
import { IPropsPages } from "../interfaces"

export const RectAngular:FC<IPropsPages> = ({title}) => {
  return (
    <MainLayout
        title={title}
    >

        <div className="mt-3 flex justify-content-center align-items-center">
            <FormRA />
        </div>

    </MainLayout>
  )
}
