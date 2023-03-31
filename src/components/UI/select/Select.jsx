import style from "./Select.module.css"
import {useQuery} from "react-query";
import {useState} from "react";
import Select from 'react-select'

const SelectField = (props) => {

    const [selectedValue, setSeletedValue] = useState(1)

    const {data, isLoading, error} = useQuery('roleList', props.values)
    if (isLoading) return <p>Загрузка...</p>


    const getValue = () => {
        return selectedValue ? data.data.find(c => c.value === selectedValue) : data.data.value[0]
    }


    const onChange = (newValue) => {
        setSeletedValue(newValue)
        props.handleChange(newValue.value)
    }

    return (


        <div style={{width: "450px"}}>
            <Select onChange={onChange} value={getValue()} options={data.data} placeholder="Выбери роль этого чувака"/>
        </div>
    )
}

export default SelectField