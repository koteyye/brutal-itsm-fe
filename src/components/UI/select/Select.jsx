import style from "./Select.module.css"
import {useQuery} from "react-query";
import { useState } from "react";
import Select from 'react-select'

const SelectField = (props) => {

    const [selectedValue, setSeletedValue] = useState(1)

    const {data, isLoading, error} =useQuery('roleList', props.values)
    if (isLoading) return <p>Загрузка...</p>


    const getValue = () => {
        return selectedValue ? data.data.find(c => c.value === selectedValue) : 1
    }

    

    const onChange = (newValue) => {
        setSeletedValue(newValue)
        props.setValue(newValue)
    }

    return (
        // <div className={style.select}>
        //     <select value={getValue()} onChange={e => onChange(e.target.value)}>
        //         {props.values ? props.values.map(v => <option key={v.id} value={v.id}>{v.name}</option>): null}
        //         {/* {data.data ? data.data.map(v => <option key={v.id} value={v.id}>{v.name}</option>) : null} */}
        //     </select>
        //     <small>{`Выбрано ${selectedValue}`}</small>
        // </div>

        <div style={{width: "450px"}}>
            <Select onChange={onChange} value={getValue()} options={data.data} />
        </div>
    )
}

export default SelectField