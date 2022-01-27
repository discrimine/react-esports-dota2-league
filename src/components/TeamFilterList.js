import React, {memo} from 'react';
import {useTranslation} from "react-i18next";
import Dropdown from 'react-dropdown';
import './SeasonFilterList.css';

const TeamFilterList = ({teamFilter, list, handler}) => {
    const {t} = useTranslation();
    const options = [];
    options.push({
        id: 'all',
        value: 'all',
        label: t('All Teams')
    })
    Object.keys(list).forEach((id) => {
        options.push({
            ...list[id],
            id: id,
            value: id,
            label: list[id].name
        })
    });

    const defaultValue = options.find(filter => filter.id === teamFilter);

    const handleOnChange = (selectedOption) => {
        handler(selectedOption.value)
    }

    return (
        <Dropdown options={options}
                  onChange={selectedOption => handleOnChange(selectedOption)}
                  value={defaultValue}
                  className='Dropdown-root-mirror'/>
    )
}

export default memo(TeamFilterList);