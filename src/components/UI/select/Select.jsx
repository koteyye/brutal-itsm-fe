import style from "./Select.module.css"
import {useQuery} from "react-query";
import {useState} from "react";

const SelectField = (props) => {

    const [selectedValue, setSeletedValue] = useState()

    const {data, isLoading, error} =useQuery('roleList', props.values)
    if (isLoading) return <p>Загрузка...</p>



    const getValue = () => {
        return selectedValue ? data.data.find(c => c.id === selectedValue) : ''
    }

    const onChange = (newValue) => {
        setSeletedValue(newValue.id)
    }

    return (
        <div className={style.select}>
            <select value={getValue()} onChange={onChange}>
                {data.data ? data.data.map(v => <option key={v.id} value={v.id}>{v.name}</option>) : null}
            </select>
        </div>
    )
}

export default SelectField