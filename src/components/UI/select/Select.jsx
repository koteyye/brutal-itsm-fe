import style from "./Select.module.css"
import {useQuery} from "react-query";
import Select from "react-select";

const SelectField = (props) => {

    const {data, isLoading, error} =useQuery('roleList', props.values)
    if (isLoading) return <p>Загрузка...</p>

    console.log(data.data)

    return (
        <div className={style.select}>
            <Select options={data.data} />
        </div>
    )
}

export default SelectField