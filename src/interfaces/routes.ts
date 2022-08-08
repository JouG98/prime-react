import { FC } from "react";
import { IPropsPages } from "./pages";


export interface IRoutes {
    Component: FC<IPropsPages>,
    name: string,
    path: string,
    title: string,
    icon?: string
}