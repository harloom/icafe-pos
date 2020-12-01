
import { MinusCircle, PlusCircle } from 'heroicons-react'
import React from 'react'

type OnValueChange = (value : number) =>void;

interface IPropsItemCart {
  name : string,
  price : number,
  count : number,
  onValueChange :OnValueChange
}

const ItemCart = (props : IPropsItemCart)=>{
  const [value ,updateValue] = React.useState<number>(1);

  React.useEffect(()=>{
    updateValue(props.count);
  },[]);


  React.useEffect(() => {
    props.onValueChange(value);
  }, [value]);

  
  return(
    <div className="w-auto flex flex-row m-1 border-b border-gray-50 py-2 p-1 justify-between ">
        <div className="flex flex-col">
          <div className="font-black">
          {props.name}
          </div>
          <div className="text-xs">
            $ {props.price}
          </div>
        </div>
        <div className="p-1 flex flex-row items-center  ">
            <button onClick={(event)=>{
              updateValue((prev)=>prev+1);
            }}>
              <PlusCircle/>
            </button>
              <span className="p-2">{value}</span>
            <button onClick={(event)=>{
              updateValue((prev)=>{
                if(prev == 1){
                  return prev;
                }
                return prev-1;
              });
            }}>
              <MinusCircle/>
            </button>
        </div>
        <div className="p-3 border border-white rounded-lg">
          $ {(value * props.price)}
        </div>
    </div>
  )
}
export default ItemCart;