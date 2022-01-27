import React, {memo} from 'react';
import {useTranslation} from "react-i18next";
import Dropdown from 'react-dropdown';
import './SeasonFilterList.css';

const SeasonFilterList = ({seasonFilter, list, handler}) => {

    const {t} = useTranslation();
    const options = list.map((item) => {
        return {
            ...item,
            value: item.id,
            label: t(`${item.name}`),
            sortId: item.name.replace(/\D/g,'')
        }
    }).sort((a, b) => a.sortId - b.sortId).reverse();

    const defaultValue = options.find(filter => filter.id === seasonFilter);

    const handleOnChange = (selectedOption) => {
        handler(selectedOption.value)
    }

    return (
        <Dropdown options={options}
        onChange={selectedOption => handleOnChange(selectedOption)}
        value={defaultValue}/>
    )

}

export default memo(SeasonFilterList);