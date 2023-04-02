import {useForm} from "react-hook-form";
import style from "../Admin-panel.module.css"
import {useMutation, useQueryClient} from "react-query";
import {useCreateUser, useRoleList} from "../../../../hooks/useUser.js";
import SearchInput from "../../../UI/search-input/Search-input.jsx";
import {searchObject} from "../../../../hooks/useSearch.js";
import SelectField from "../../../UI/select/Select.jsx";
import Btn from "../../../UI/btn/Btn.jsx";
import Uploader from "../../../UI/uploader/Uploader";
import { useState } from "react";

const CreateUserForm = (props) => {

    const [fd, setFd] = useState(null)

    const {setValue, getValues, register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
    })

    const queryClient = useQueryClient()

    const {mutate} = useMutation(['create user'], (data) => useCreateUser(data, fd), {
        onSuccess: () => {
            queryClient.invalidateQueries('userList')
            reset()
            props.created()
        }
    })

    
    const loadFd = (e) => {
        setFd(e)
    }

    const createUser = (data) => {
        props.createUser(1)
        mutate({...data})
    }

    return (
        <form
            className={style.createUserForm}
            onSubmit={handleSubmit(createUser)}
        >
            <h2>Создание пользователя</h2>
            <div className={style.createUserFormField}>
                <label>Логин</label>
                <input
                    {...register("login", {required: true})}
                    type="text"
                    placeholder="Введи логин"
                />
            </div>

            <div className={style.createUserFormField}>
                <label>Email</label>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Введи почту (при наличии)"
                />
            </div>

            <div className={style.createUserFormField}>
                <label>Фамилия</label>
                <input
                    {...register("lastname", {required: true})}
                    type="text"
                    placeholder="Введи почту (при наличии)"
                />
            </div>

            <div className={style.createUserFormField}>
                <label>Имя</label>
                <input
                    {...register("firstname", {required: true})}
                    type="text"
                    placeholder="Введи почту (при наличии)"
                />
            </div>

            <div className={style.createUserFormField}>
                <label>Отчество</label>
                <input
                    {...register("middlename", )}
                    type="text"
                    placeholder="Введи почту (при наличии)"
                />
            </div>

            <div className={style.createUserFormSearch}>
                <label>Должность</label>
                <SearchInput
                    placeholderText="Начни вводить должность для поиска"
                    searchObject={searchObject.job}
                    clickResult={(e) => setValue("job", e, {shouldValidate: true})}
                />
            </div>

            <div className={style.createUserFormSearch}>
                <label>Организация</label>
                <SearchInput
                    placeholderText="Начни вводить организацию для поиска"
                    searchObject={searchObject.org}
                    clickResult={(e) => setValue("org", e, {shouldValidate: true})}
                />
            </div>

            <div className={style.createUserFormSelect}>
                <label>Роли</label>
                <SelectField
                    values={useRoleList}
                    handleChange={(e) => {
                        setValue("role", e, {required: true});
                    }}
                />
            </div>
            <div className={style.createUserFormSearch}>
                <label>Аватар</label>
                <Uploader fileSelected={(e) => loadFd(e)} />
            </div>
            <div style={{display: "flex", placeContent: "center", marginTop: "20px"}}>
                <Btn color="green" label="Создать" click={handleSubmit(createUser)}/>
            </div>
        </form>
    );
}

export default CreateUserForm
