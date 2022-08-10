import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { ChangeEvent, useState, useContext } from "react";
import { useForm } from "../../hooks";
import { AuthContext } from "../../context";
import { ButtonNew } from "../form";

export const SingIn = () => {
  const { singIn } = useContext(AuthContext);

  const { form, handelChangeInputs, reset } = useForm();
  const { email, password } = form;

  const handleSumit = () => {
    console.log(form);
    singIn(form);

    reset();
    // setForm(init)
  };

  return (
    <div className="card p-4 shadow-2 border-round w-full lg:w-6">
      <div className="text-center mb-5">
        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      </div>

      <div>
        <label htmlFor="email" className="block text-900 font-medium mb-2">
          Email
        </label>

        <InputText
          type="text"
          name="email"
          value={email}
          className="w-full mb-3"
          onChange={handelChangeInputs}
        />

        <label htmlFor="password" className="block text-900 font-medium mb-2">
          Password
        </label>

        <InputText
          type="password"
          name="password"
          value={password}
          className="w-full mb-3"
          onChange={handelChangeInputs}
        />

        <div className="flex align-items-center justify-content-end mb-6">
          <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
            Forgot your password?
          </a>
        </div>
        <ButtonNew 
          bg="#1F7144"
          onClick={handleSumit}
        > 
          SEND
        </ButtonNew>
        {/* <Button
          label="Sign In"
          icon="pi pi-user"
          className="w-full"
          onClick={handleSumit}
        /> */}
      </div>
    </div>
  );
};
