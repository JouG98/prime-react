import { createContext } from 'react';
import { IuseForm } from '../../interfaces';

interface ContextProps {
    user: IuseForm|null;

    singIn: (auth: IuseForm) => void;
    singOut: () => void
}

 export const AuthContext = createContext({} as ContextProps);