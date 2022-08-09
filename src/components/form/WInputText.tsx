import { InputText, InputTextProps } from "primereact/inputtext";
import { IInputContainerRenderInputParams } from 'react-angular-forms';

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