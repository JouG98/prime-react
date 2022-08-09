import { FC, useContext } from "react";
import { MainLayout } from "../components";
import { IPropsPages } from "../interfaces";
import { SingIn } from "../components";
import { AuthContext } from "../context";

export const Home: FC<IPropsPages> = ({ title }) => {
  const { user, singOut } = useContext(AuthContext);

  return (
    <MainLayout title={title}>
      {user ? (
        <>
          <div className="">
            <span>Credentials:</span>
            <p>User: {user.email} </p>
          </div>
        </>
      ) : (
        <div className="mt-3 flex justify-content-center align-items-center">
          <SingIn />
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
