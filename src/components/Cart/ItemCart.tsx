
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

const ItemCart = (props: IPropsItemCart) => {
  const [value, updateValue] = React.useState<number>(1);
  React.useEffect(() => {
    updateValue(props.count);
    // eslint-disable-next-line
  }, []);

  const handleUpdate = (type: ItemClick) => {
    if (type === ItemClick.PLUS) {
      updateValue(prevValue => {
        const cal = prevValue + 1;
        props.onValueChange(cal);
        return cal;
      });
    } else if (type === ItemClick.MINUS) {
      updateValue(prevValue => {
        if (prevValue === 1) {
          props.onValueChange(prevValue);
          return prevValue;
        }
        const cal = prevValue - 1;
        props.onValueChange(cal);
        return cal;
      });
    }


  }



  return (
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
        <button onClick={(event) => {
          handleUpdate(ItemClick.MINUS)
        }}>
          <MinusCircle />
        </button>
        <span className="p-2">{value}</span>
        <button onClick={(event) => {
          handleUpdate(ItemClick.PLUS);
        }}>
          <PlusCircle />
        </button>

      </div>
      <div className="p-3 border border-white rounded-lg">
        $ {(value * props.price)}
      </div>
    </div>
  )
}
export default ItemCart;