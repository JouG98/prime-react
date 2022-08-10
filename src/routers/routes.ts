import { IRoutes } from "../interfaces";
import { About, Home, ObservableApi, Pokemons, RectAngular } from "../pages";


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
    {
        Component: Pokemons,
        name: 'Call Api',
        path: '/pokemons',
        title: 'Get Pokemons',
        icon: 'pi pi-user',
    },
    {
        Component: RectAngular,
        name: 'RectAngular',
        path: '/rectAngular',
        title: 'RectAngular',
        icon: 'pi pi-user',
    },
    {
        Component: ObservableApi,
        name: 'ObservableApi',
        path: '/observableapi',
        title: 'ObservableApi',
        icon: 'pi pi-user',
    },
]