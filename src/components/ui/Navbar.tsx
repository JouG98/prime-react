import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { routes } from "../../routers";



export const Navbar = () => {


    const navigate = useNavigate();
    const {pathname} = useLocation();

    const handleNavigate = ( url: string) => {
        navigate(url)
    }

  return (
        <nav className="navbar"> 

            <h1>Navigation</h1>

            <div className="navigation">

                {
                    routes.map( ({name, path, icon}) => (
                        <div 
                            className="links"
                            key={path}
                        >
                            <div 
                                className={ pathname === path ? 'item-active': 'item'}
                                // className="item"
                                onClick={() =>handleNavigate(path)}
                            >
                                    <span className={ icon }>
                                        {` ${ name}`}
                                    </span>
                            </div>
                            
                        </div>
                    ))
                }

                
            </div>
        </nav>
  )
}
