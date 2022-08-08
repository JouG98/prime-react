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
        name: 'About',
        path: '/about',
        title: 'About Page',
        icon: 'pi pi-user',
    },
]