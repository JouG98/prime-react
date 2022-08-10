import { useEffect } from "react";
import {
    FormControl,
    FormGroup,
    useFormConfig,
    WControlData,
    WForm,
    WFormControl,
    WFormGroup,
  } from "rectangular-forms";


  
import { InputText } from 'primereact/inputtext';
import { ButtonNew } from "../form";
 

export const FormRA = () => {

    const formConfig = useFormConfig({
        createForm: (data) => {
          const form = new FormGroup({
            name: new FormControl(),
            lastname: new FormControl(),
            document: new FormGroup({
              type: new FormControl(),
              number: new FormControl(),
            }),
          });
          form.patchValue(data);
          return form;
        },
        onSubmit: ( datos ) => {
            console.log(datos.value)
        }
      });
      
    const { loadSucceed, submit } = formConfig;
      
      useEffect(() => {
        loadSucceed({
          name: "Jhon",
          lastname: "Doe",
          document: {
            type: "PASSPORT",
            number: "2345656",
          },
        });
      }, [loadSucceed]);


  return (
    <>
    <WForm formConfig={formConfig}>

        <WControlData />
        <div 
            className=" mt-4 card p-4 shadow-2 border-round w-full "
        >
            <div className="">
                <WFormControl name="name">
                    {({ control }) => {
                    const { value, onChange, onBlur, disabled } = control;
                    return (
                        // <input
                        
                        // />
                        <span 
                            className=""
                        >
                            <label 
                                htmlFor="inputtext"
                            >
                                Name:
                            </label>

                            <InputText 
                                id="inputtext" 
                                className="w-full mb-3"
                                value={value || ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                disabled={disabled}
                                // value={value1} 
                                // onChange={(e) => setValue1(e.target.value)} 
                            />
                            
                        </span>
                    );
                    }}
                </WFormControl>
            </div>
           
           <div className="">
            <WFormControl name="lastname">
                    {({ control }) => {
                    const { value, onChange, onBlur, disabled } = control;
                    return (
                        <span 
                            className=""
                        >
                            <label 
                                htmlFor="inputtext"
                            >
                                Last Name:
                            </label>

                            <InputText 
                                id="inputtext" 
                                className="w-full mb-3"
                                value={value || ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                disabled={disabled}
                                // value={value1} 
                                // onChange={(e) => setValue1(e.target.value)} 
                            />
                            
                        </span>
                    );
                    }}
                </WFormControl>
           </div>

           <div className="">
            <WFormControl name="document.type">
                    {({ control }) => {
                    const { value, onChange, onBlur, disabled } = control;
                    return (
                        <span 
                            className=""
                        >
                            <label 
                                htmlFor="inputtext"
                            >
                                Last Name:
                            </label>

                            <InputText 
                                id="inputtext" 
                                className="w-full mb-3"
                                value={value || ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                disabled={disabled}
                                // value={value1} 
                                // onChange={(e) => setValue1(e.target.value)} 
                            />
                            
                        </span>
                    );
                    }}
                </WFormControl>
           </div>

            <div className="">
                <WFormGroup
                    name="document"
                >
                    <WFormControl name="type">
                        {({ control }) => {
                            const { value, onChange, onBlur, disabled } = control;
                            return (
                            <input
                                value={value || ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                disabled={disabled}
                            />
                            );
                        }}
                    </WFormControl>
                    <WFormControl name="number">
                        {({ control }) => {
                            const { value, onChange, onBlur, disabled } = control;
                            return (
                            <input
                                value={value || ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                disabled={disabled}
                            />
                            );
                        }}
                    </WFormControl>
                </WFormGroup>
            </div>
            
            <div 
                className=""
            >
                <span 
                    className=""
                >
                    <label 
                        htmlFor="inputtext"
                    >
                        Document:
                    </label>

                    <InputText 
                        id="inputtext" 
                        className="w-full mb-3"
                        // value={value1} 
                        // onChange={(e) => setValue1(e.target.value)} 
                    />
                    
                </span>
            </div>

            <ButtonNew>
                Send
            </ButtonNew>
        </div>

    </WForm>
            
    </>
  )
}
