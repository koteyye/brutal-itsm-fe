import {useEffect, useState} from "react";
import style from "./Search-input.module.css"
import close from "../../../assets/icons/close.svg"
import {useSearch} from "../../../hooks/useSearch.js";

const SearchInput = (props) => {

    const [query, setQuery] = useState('')
    useEffect( () => {
        if(query !== '') {
            const fetchData = async () => {
                const data = await useSearch(query, props.searchObject)
                setResult(data)
            }
            fetchData()
        }
        setResult([])
    }, [query])

    const [result, setResult] = useState([])

    const [selectedValue, setSelectedValue] = useState('')


    const removeResult = () => {
        return (<div className={style.closebtn}>
            <img src={close} alt="close" width="30px" height="30px" onClick={() => {
                setSelectedValue('')
                props.clickResult('')
            }}/>
        </div>)
    }



    return (
        <div style={{marginBottom: "35px"}}>
            <div className={style.searchAutocomplite}>
                <input
                    type='text'
                    placeholder={props.placeholderText}
                    onChange={(event) => {
                        setQuery(event.target.value)
                    }}
                    value={selectedValue === '' ? query : selectedValue}
                    disabled={!!selectedValue}
                />

                {selectedValue ? removeResult() : null}

                <ul>
                    {result.data ? result.data.map(r => <li key={r.id} onClick={() => {
                        props.clickResult(r.id)
                        setResult([])
                        setQuery('')
                        setSelectedValue(r.name)
                    }}>{r.name}</li>) : null}
                </ul>
            </div>

        </div>
    )
}

export default SearchInput