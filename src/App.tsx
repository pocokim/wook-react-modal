import React, {useState} from 'react';
import ModalForm from './components/Modal';

const App: React.FC = () => {
  const [isOpen, isSetOpen] = useState(false)

  return (
    <>
    <button onClick={()=>isSetOpen(!isOpen)}>버튼을 입력하세요</button>
    <ModalForm
      close={()=>{ isSetOpen(false)}} 
      isOpen={isOpen}
      size={'large'}
      body={Array(4).fill("a").map((el,idx)=>el+idx)}
    />
    </>
  )
};

export default App