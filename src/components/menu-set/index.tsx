
import { ReactNode, useId } from "react";

const MenuSet = (props:Props) => {
 
    const renderList = (props:Props) => {
        const { list, selected, onclick } = props;
        let textClasses = '';
        const newList = list.map((item)=> {
            const id = 'menu'+item.id.toString()
            if(selected === id || selected === item.text) {
                textClasses = 'text-md w-full border-r-4 border-emerald-600 text-emerald-700';
            } else {
                textClasses = 'text-md w-full';
            }
            return (
                <div className="flex flex-row gap-4 items-center w-full cursor-pointer" key={useId()} onClick={onclick}>
                    {item.icon}
                    <div id={id} className={textClasses}>{item.text}</div>
                </div>
            )
        });
        
        return newList;
    }
    
    return (
        <div id="menu" className="mb-10">
          <p className="text-sm text-gray-400 mb-4 uppercase">{props.title}</p>
          <div className="flex flex-col gap-4 items-center">
            {renderList(props)}
          </div>
        </div>
    )
};

export interface Props {
    title: String;
    list: Array<ListItem>
    selected?: String;
    onclick?: (e:any) => void;
}

interface ListItem {
    id: number;
    icon: ReactNode;
    text: string;
    isSelected?: boolean;
}

export default MenuSet;
