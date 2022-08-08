
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import '/node_modules/primeflex/primeflex.css'  // PrimeFlex

import { AppRouters } from "./routers"
import { AuthProvider } from "./context";

export const App = () => {
  return (
    <AuthProvider>
      <AppRouters />
    </AuthProvider>
  )
}
