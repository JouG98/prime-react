import { useAsyncExecutor } from "async-executor-hook";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextProps } from "primereact/inputtext";
import { useState } from "react";
import { IInputContainerRenderInputParams } from "react-angular-forms";
import {
  FormControl,
  FormGroup,
  useFormGroup,
  InputContainer,
  Validators,
  PrettyJson,
} from "react-angular-forms";
import { of } from "rxjs";

const createFormGroup = () => {
  const formGroup = new FormGroup({
    names: new FormControl(null, [Validators.required]),
    lastnames: new FormControl(null, [Validators.required]),
    address: new FormControl(null),
  });
  return formGroup;
};

export const Form = () => {
  const { getFormGroup, setFormGroup } = useFormGroup();

  useAsyncExecutor(() => {}, {
    source$: of({}),
    onSuccess: () => {
      const fg = createFormGroup();
      setFormGroup(fg);
      // fg.patchValue({ names: "BRANGY", lastnames: "CASTRO" });
    },
  });

  const onClickForm = (e: any) => {
    e.preventDefault();
    if (getFormGroup().invalid) {
      alert("Formulario invalido");
      return;
    }
    console.log(getFormGroup().value);
  };

  return (
    <>
      <div className="card p-4 shadow-2 border-round w-full lg:w-6">
        <PrettyJson data={getFormGroup().value} />
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        </div>
        <form onSubmit={onClickForm}>
          <div>
            <label
              htmlFor="password"
              className="block text-900 font-medium mb-2"
            >
              Names
            </label>
            <InputContainer
              control={getFormGroup().get("names") as FormControl}
              renderInput={
                WInputText({
                  style: { height: 50, width: "100%" },
                  placeholder: "Escriba algún comentario adicional",
                }) as any
              }
            />
            <label
              htmlFor="password"
              className="block text-900 font-medium mb-2"
            >
              Lastnames
            </label>
            <InputContainer
              control={getFormGroup().get("lastnames") as FormControl}
              renderInput={
                WInputText({
                  style: { height: 50, width: "100%" },
                  placeholder: "Escriba algún comentario adicional",
                }) as any
              }
            />
            <label
              htmlFor="password"
              className="block text-900 font-medium mb-2"
            >
              Address
            </label>
            <InputContainer
              control={getFormGroup().get("address") as FormControl}
              renderInput={
                WInputText({
                  style: { height: 50, width: "100%" },
                  placeholder: "Escriba algún comentario adicional",
                }) as any
              }
            />

            <Button label="Sign In" icon="pi pi-user" className="w-full" />
          </div>
        </form>
      </div>
    </>
  );
};

export const WInputText =
  (custom: InputTextProps | any = {}) =>
  ({
    control: { onChange, value, disabled, onBlur },
    validationStatus,
    showErrors,
  }: IInputContainerRenderInputParams) => {
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
