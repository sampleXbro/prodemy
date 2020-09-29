import React, {useState} from 'react';
import {ListItem} from "./ListItem";
import {Title} from "../titles/Title";
import {Input} from "../inputs/Input";
import {string, array, oneOfType, number} from "prop-types";

export const ItemsList = ({items, softwareId, itemType, qtyList}) => {

    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e);
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

ItemsList.proptypes = {
    items: array,
    softwareId: oneOfType([string, number]),
    itemType: string,
    qtyList: number
};
