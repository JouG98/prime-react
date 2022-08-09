import { FC } from "react";
import { IPropsPages } from "../interfaces";
import { MainLayout, Form } from "../components";

export const About: FC<IPropsPages> = ({ title }) => {
  return (
    <MainLayout title={title}>
      <div
        className={`
        text-center
        mt-3
      `}
      >
        React Angular Form
      </div>

      <div className="mt-3 flex justify-content-center align-items-center">
        <Form />
      </div>
    </MainLayout>
  );
};
