import './App.css';
import MyModal from './components/Modal';
import { useState } from 'react';
import { Button} from '@material-ui/core'
function App() {

  const [isOpen , setIsOpen] = useState(false);

  return (
    <div>
      <Button variant='contained' color = 'primary' onClick={()=> setIsOpen(true)} >Open</Button>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
