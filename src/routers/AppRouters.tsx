// import { Suspense } from "react"; // para lazy load - carga peresoza
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Header, Navbar } from "../components"
import { routes } from "./routes";


export const AppRouters = () => {

  return (
 
      <BrowserRouter>
        <Header />
        <div className="main-layout">
          <Navbar />

            <Routes>
              {
                routes.map( ({Component, path, title}) => (
                  <Route
                    key={path}
                    path={path}
                    element={ < Component title={title} />  }
                  />
                ))
              }

                <Route path="/*" element={ <Navigate to={routes[0].path} replace /> } />
            </Routes>
        </div>
      </BrowserRouter>
  )
}
