import React, {useState, useEffect} from 'react';
import {ListItem} from "./ListItem";
import {Title} from "../titles/Title";
import {Input} from "../inputs/Input";

export const ItemsList = ({items, softwareId, itemType}) => {

    const [input, setInput] = useState('');
    const [qtyList, setQtyList] = useState(5);

    const handleInputChange = (e) => {
        setInput(e);
    };

    useEffect(() => {
        return () => {
            window.onscroll = null
        }
    }, []);

    window.onscroll = function sc(ev) {
        const set = () => {
            setQtyList(qtyList + 5);
        };
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            set()
        }
    };

    const itemsListJsx = items
        .filter((item) => softwareId ? item.software_id === softwareId : item )
        .filter((item) => item.title.toLowerCase().includes(input) || item.description.toLowerCase().includes(input))
        .map((item, i) => {
                if(i < qtyList) return <ListItem key={item.id} item={item} itemType={itemType}/>
            }
        );

    return (
        <div>
            <div className={'search-bar-container'} >
                <Title weight={300} size={18} text={`Найдено ${itemsListJsx.length}`} margin={'10px'}/>
                <Input value={input} onChange={(e) => handleInputChange(e.target.value.toLowerCase())}/>
            </div>
            {itemsListJsx}
        </div>
    )
};
