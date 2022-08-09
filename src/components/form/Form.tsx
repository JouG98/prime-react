import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useEffect } from 'react';


import {  InputTextProps } from "primereact/inputtext";
import { IInputContainerRenderInputParams } from 'react-angular-forms';

import {
    FormControl,
    FormGroup,
    useFormGroup,
    InputContainer,
    Validators,
} from 'react-angular-forms';
// import { WInputText } from './WInputText';

const createFormGroup = () => {
    const formGroup = new FormGroup({
      nombre: new FormControl(null, [Validators.required, Validators.email]),
      apellido: new FormControl(null, [Validators.required, Validators.email]),
      direccion: new FormControl(null, [Validators.required, Validators.email]),
    });

    return formGroup;
}


export const Form = () => {

    // hook de FormGroup
    const {getFormGroup, setFormGroup} = useFormGroup();
    const formG = getFormGroup();

    useEffect(() => {
      const formGrup = createFormGroup();
      setFormGroup(formGrup);
    }, [])
    


  return (
    <>
    
        <div 
        className="card p-4 shadow-2 border-round w-full lg:w-6"
    >
        <div 
            className="text-center mb-5"
        >
            <div 
                className="text-900 text-3xl font-medium mb-3"
            >
                Welcome Back
            </div>
        </div>

        <div>
            <label 
                htmlFor="email" 
                className="block text-900 font-medium mb-2"
            >
                Email
            </label>

            {/* <InputContainer 
                control={formG.get('nombre') as FormControl}            
                renderInput={WInputText()}
            ></InputContainer> */}

            <InputText 
                type="text" 
                name='email'
                // value={email}
                className="w-full mb-3" 
                // onChange={ handelChangeInputs }
            />

            <label 
                htmlFor="password" 
                className="block text-900 font-medium mb-2"
            >
                Password
            </label>

            <InputText 
                type="password" 
                name='password'
                // value={password}
                className="w-full mb-3" 
                // onChange={ handelChangeInputs}
            />

            <div 
                className="flex align-items-center justify-content-end mb-6"
            >
                <a 
                    className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
                >
                    Forgot your password?
                </a>
            </div>

            <Button 
                label="Sign In" 
                icon="pi pi-user" 
                className="w-full"
                // onClick={ handleSumit }
            />
        </div>
    </div>
    </>

    
  )
}



export const WInputText = (custom: InputTextProps | any = {}) =>
  (
        {
            control: { onChange, value, disabled, onBlur },
            validationStatus,
            showErrors,
        }: IInputContainerRenderInputParams
    ) => {
    const type = custom.type ? custom.type : "text";
    let defaultValue = value;
    if (value === null || value === undefined) {
      if (type === "text" || type === "email") {
        defaultValue = "";
      } else if (type === "number") {
        defaultValue = null;
      } else {
        defaultValue = "";
      }
      //TODO: default values for another types like: date, color, time, url, etc
    } else {
      if (type === "number") {
        defaultValue = custom.converttoint
          ? parseInt(value)
          : parseFloat(value);
      }
    }
    return (
      <InputText
        onBlur={onBlur}
        disabled={disabled}
        className={
          showErrors && validationStatus === "ERROR" ? "p-invalid" : ""
        }
        value={defaultValue}
        onChange={onChange}
        type={type}
        autoComplete="off"
        {...custom}
      />
    );
  };