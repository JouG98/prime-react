import { FC } from "react"
import { IPropsPages } from "../../interfaces"



export const MainLayout:FC<IPropsPages> = ({title, children}) => {
    document.title = title
  return (
      <div className="content">
        <h1> {title} </h1>
            { children }
      </div>
  )
}
