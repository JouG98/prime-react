import { useContext } from 'react';
import { AuthContext } from '../../context';

import {Button} from 'primereact/button'
import { useNavigate } from 'react-router-dom';

export const Header = () => {

  const {singOut, user} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = ( ) => {
    singOut(); 
    navigate('/')
  }


  return (
    <header className='flex justify-content-between mx-4 mt-2'>

      <h2>Header</h2>

      {
        user && (
          <Button 
            label="singOut" 
            className="p-button-danger" 
            icon={'pi pi-times'}
            onClick={handleLogout}
          />
        )
      }

    </header>
  )
}
