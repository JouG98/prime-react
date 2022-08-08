import { FC } from "react"
import { IPropsPages } from "../interfaces"
import { MainLayout } from '../components';

export const About:FC<IPropsPages> = ({title}) => {

  return (
    <MainLayout
      title={title}
    >

    </MainLayout>
  )
}
