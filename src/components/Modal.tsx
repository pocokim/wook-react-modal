
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledBackground = styled.div`
  position: fixed;
  z-index: 3000; 
  right: 0px; 
  bottom: 0px; 
  top: 0px; 
  left: 0px; 
  background-color: rgba(0, 0, 0, 0.4);
`

type BackgroundProps = {
  close: () => void
}

const Background = ({close}: BackgroundProps) => <StyledBackground className='background' onClick={close}></StyledBackground>


type DisplayProps = {
  onOpen?: () => void,
  onClose?: () => void,
  size: string,
  head?: any,
  body: any,
  foot?: any
}

type styledDisplayType = {
  size: string
}


const StyledDisplay = styled.div`
  position: fixed; 
  z-index: 3001; 
  display: flex; 
  flex-direction: column; 
  background: #e6ecf1; 
  margin: 10px;
  ${({size} : styledDisplayType) => (size) === 'large' && 
    "top: 5%; right: 7%; bottom: 5%; left: 7%; min-width: 1000px; max-width: 2000px; min-height: 550px;"}
  ${({size} : styledDisplayType) => (size) === 'medium' && 
    "top: 20%; right: 30%; bottom: 30%; left: 30%;"}
    
  .modal-display medium {
    top: 20%; 
    right: 30%; 
    bottom: 30%; 
    left: 30%;
  }
  .modal-display-head {
    position: absolute; 
    top: 0; 
    height: 60px; 
    width: 100%; 
    background-color: #31415d;
  }
  .modal-display-body {
    height: 100%; 
    margin: 60px 10px 60px 10px; 
    padding-bottom:10px; 
    overflow: scroll;
  }
  .modal-display-foot {
    position: absolute; 
    bottom: 0; 
    height: 60px; 
    width: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    background-color: white;
  }
`
const Display = ({onOpen, size, head, body, foot, onClose}: DisplayProps) => {
      useEffect(() => {
          if(onOpen !== undefined){
            onOpen()
            return onClose
          }
      }, [])

  return (
      <StyledDisplay size={size}>
          <div className='modal-display-head'>
              {head}
          </div>
          <div className='modal-display-body'>
              {body}
          </div>
          <div className='modal-display-foot'>
              {foot}
          </div>
      </StyledDisplay>
  )
}


type ModalFormProps = {
  isOpen: boolean,
  close: () => void
  onOpen?: () => void,
  onClose?: () => void,
  size: string,
  head?: any,
  body: any,
  foot?: any
}

const ModalForm = ({isOpen,close,size,head,body,foot,onOpen,onClose}: ModalFormProps) => {
  return (
      isOpen
          ? <div className='modal-form'>
              <Background close={close} />
              <Display
                  size={size}
                  head={head}
                  body={body}
                  foot={foot}
                  onOpen={onOpen}
                  onClose={onClose}
              />
          </div>
          : <div className='modal-form'></div>
  )
}

export default ModalForm
