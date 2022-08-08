import { ChangeEvent, useContext, useState } from 'react';
import { AuthContext } from '../context';
import { IuseForm } from '../interfaces';




export const useForm = ( ) => {
    const init = {
        email: '', 
        password: '', 
    }

    const [form, setForm] = useState<IuseForm>(init);

    const {singIn} = useContext(AuthContext);

    const handelChangeInputs = ( {target}: ChangeEvent<HTMLInputElement> ) => {
    //  console.log(e);
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }

    const reset = ( ) => setForm(init);

 

    return{
        form, 
        handelChangeInputs, 
        reset,
        // handleSumit,
    }

}