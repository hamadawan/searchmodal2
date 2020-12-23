import './App.css';
import MyModal from './components/Modal';

import { useState } from 'react';
import { Button} from '@material-ui/core'
function App() {

  const [isOpen , setIsOpen] = useState(false);

  const [isOpen2 , setIsOpen2] = useState(false);

  const [isOpen3 , setIsOpen3] = useState(false);

  return (
    <>
      <Button  variant='contained' color = 'primary' onClick={()=> setIsOpen(true)} >Open</Button>
      <MyModal  isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <Button  variant='contained' color = 'primary' onClick={()=> setIsOpen2(true)} >Open2</Button>
      <MyModal   isOpen={isOpen2} setIsOpen={setIsOpen2} />

      <Button  variant='contained' color = 'primary' onClick={()=> setIsOpen3(true)} >Open3</Button>
      <MyModal  isOpen={isOpen3} setIsOpen={setIsOpen3} />
    </>
  );
}

export default App;
