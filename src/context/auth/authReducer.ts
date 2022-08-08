import { IuseForm } from '../../interfaces';
import { AuthState } from './';

type AuthActionType = 
   | { type: '[Auth] - Sing-In', payload: IuseForm}
   | { type: '[Auth] - Sing-Out'}

export const authReducer  = ( state: AuthState, action: AuthActionType ): AuthState => {
   switch (action.type) {

       case '[Auth] - Sing-In':
           return {
               ...state,
               user: action.payload,
           }         
        
        case '[Auth] - Sing-Out':
            return{
                ...state,
                user: null
            }

       default:
          return state;
   }
} 