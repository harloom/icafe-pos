import React, {   memo } from 'react'
import { ButtonSIze } from './Size';


export enum ButtonStyle {
  LigthDark,Default
}

interface IProsIconButton {
  label : string,
  style? : ButtonStyle,
  size? : ButtonSIze,
  icon? : React.SVGProps<SVGSVGElement>
  onClick? : (event:React.MouseEvent<HTMLButtonElement>)=>void,
}

const ButtonIcon = memo(function ButtonIcon({ icon,size =ButtonSIze.Base, style = ButtonStyle.Default,label,onClick} : IProsIconButton) {
  const baseSize : string = 'py-2 px-4 text-base rounded-md  ';
  const smallSize  : string= 'py-2 px-4 text-xs rounded-md shadow';

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
  const ligthAndDrak =`bg-white text-gray-500 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 focus:bg-gray-200`;

  const getStyle = (()=>{
      switch(style){
          case ButtonStyle.LigthDark :
          return ligthAndDrak;
          default:
          return  `text-white bg-yellow-500 ${hover} ${focus}`;
      }
  })();


  return (
    <>  
      <button onClick={onClick}
        className={`${getSize} m-1 items-center   font-medium  inline-flex  ${getStyle} `}>
          {icon}
          <span className="mx-1">{label}</span>
      </button>
    </>
  )
});



export default ButtonIcon
