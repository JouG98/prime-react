import { IRoutes } from "../interfaces";
import { About, Home } from "../pages";


export const routes: IRoutes[] = [
    {
        Component: Home,
        name: 'Home',
        path: '/',
        title: 'Home Page',
        icon: 'pi pi-home',
    },
    {
        Component: About,
        name: 'Form',
        path: '/about',
        title: 'Form Page',
        icon: 'pi pi-user',
    },
]