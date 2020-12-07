
import { MinusCircle, PlusCircle } from 'heroicons-react'
import React from 'react'

type OnValueChange = (value: number) => void;

interface IPropsItemCart {
  name: string,
  price: number,
  count: number,
  onValueChange: OnValueChange
}

enum ItemClick {
  PLUS, MINUS
}

const ItemCart = (props  : IPropsItemCart) => {
  // const [value, updateValue] = React.useState<number>(1);
  React.useEffect(() => {
    // updateValue(props.count);
    // eslint-disable-next-line
  }, []);

  const handleUpdate = (type: ItemClick) => {
 
      //   props.onValueChange(cal);
    if (type === ItemClick.PLUS) {
      // updateValue(prevValue => {
      //   const cal = prevValue + 1;
      //   props.onValueChange(cal);
      //   return cal;
      const cal = props.count + 1;
      props.onValueChange(cal);

      // });
    } else if (type === ItemClick.MINUS) {
      // updateValue(prevValue => {
      //   if (prevValue === 1) {
      //     props.onValueChange(prevValue);
      //     return prevValue;
      //   }
      //   const cal = prevValue - 1;
      //   props.onValueChange(cal);
      //   return cal;
      // });
  
        const cal = props.count - 1;
        props.onValueChange(cal);

    }


  }



  return (
    <div className="w-auto flex flex-row m-1 border-b border-gray-50 py-2 p-1 justify-between ">
      <div className="flex-1 flex-col">
        <div className="font-medium text-sm">
          {props.name} 
        </div>
        <div className="text-xs">
          $ {props.price}
        </div>
      </div>
      <div className="p-initial flex-1 flex flex-row items-center  ">
        <button onClick={(event) => {
          handleUpdate(ItemClick.MINUS)
        }}>
          <MinusCircle />
        </button>
        <span className="p-2">{props.count}</span>
        <button onClick={(event) => {
          handleUpdate(ItemClick.PLUS);
        }}>
          <PlusCircle />
        </button>

      </div>
      <div className="p-3 flex-initial border border-white rounded-lg">
        $ {(props.count * props.price)}
      </div>
    </div>
  )
}
export default ItemCart;