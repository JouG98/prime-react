import { FC, useReducer, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IuseForm } from '../../interfaces';
import { AuthContext, authReducer } from './';


export interface AuthState {
   user: IuseForm|null;
}

const Auth_INITIAL_STATE: AuthState = {
   user: null
}

interface Props  {
   children?: ReactNode;
}

const localData = () =>{
    const d = localStorage.getItem('state');
    if(!d){
        // no esta auth
        return Auth_INITIAL_STATE
    }

    return JSON.parse(d);
}

export const AuthProvider: FC <Props> = ( {children} ) => {

    const init = localData();
    // const navigate = useNavigate();

  const [state, dispatch] = useReducer(authReducer, init );

  useEffect(() => {
      // save loaclStorage
      localStorage.setItem('state', JSON.stringify(state) )
  }, [state])
  

  const singIn = ( auth: IuseForm ) => {

    dispatch({
        type: '[Auth] - Sing-In', 
        payload: auth,
    })
  }

  const singOut = () =>{
    // localStorage.setItem('state', JSON.stringify('') )

    dispatch({type: '[Auth] - Sing-Out'})

    
  }

  return(
     <AuthContext.Provider value={{
            ...state,

            // methods
            singIn,
            singOut
        }} >
        { children }
     </AuthContext.Provider>
  )

}