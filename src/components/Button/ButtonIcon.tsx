

import React, {   memo } from 'react'
import { ButtonSIze } from './Size';

interface IProsIconButton {
  color? : string ,
  label : string,
  style? : string,
  size? : ButtonSIze,
  onClick? : (event:React.MouseEvent<HTMLButtonElement>)=>void,
}

const ButtonIcon = memo(function ButtonIcon({color="bg-yellow-500", size =ButtonSIze.Base, style,label,onClick} : IProsIconButton) {
  const baseSize : string = 'py-2 px-4 text-base rounded-md  ';
  const smallSize  : string= 'py-2 px-3 text-xs rounded-sm';

  const getSize =(()=>{
    switch(size){
      case ButtonSIze.Base:
        return baseSize;
      case ButtonSIze.Small :
      return smallSize;
      default :  
      return baseSize;
    }
  })();
  const hover = `transform hover:bg-yellow-600 hover:scale-105`
  const focus = `focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:bg-yellow-500`;
  return (
    <>  
      <button onClick={onClick}
        className={`${color}  ${getSize} m-1 text-white  font-medium ${focus} inline-flex ${hover} ${style} `}>
          <span>{label}</span>
      </button>
    </>
  )
});



export default ButtonIcon
