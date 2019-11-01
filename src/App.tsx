import React, {useState} from 'react';
import ModalForm from './components/Modal';

const App: React.FC = () => {
  const [isOpen, isSetOpen] = useState(false)

  return (
    <>
    <button onClick={()=>isSetOpen(!isOpen)}>버튼을 입력하세요</button>
    <ModalForm
      head={<h1 className='modal-title'>내가 만든 모달</h1>}
      close={()=>{ isSetOpen(false)}} 
      isOpen={isOpen}
      size={'large'}
      body={Array(4).fill("Lorem ipsum dolor sit amet.").map(el=>(<h1>{el}</h1>))}
    />
    </>
  )
};

export default App

