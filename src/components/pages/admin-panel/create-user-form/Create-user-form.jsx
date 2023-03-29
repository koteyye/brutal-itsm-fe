import {useForm} from "react-hook-form";
import style from "../Admin-panel.module.css"
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useCreateUser, useRoleList} from "../../../../hooks/useUser.js";
import SearchInput from "../../../UI/search-input/Search-input.jsx";
import {searchObject} from "../../../../hooks/useSearch.js";
import SelectField from "../../../UI/select/Select.jsx";

const CreateUserForm = () => {

    const {setValue, getValues, register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur'
    })

    const queryClient = useQueryClient()

    const {} = useMutation(['create user'], (data) => useCreateUser(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('userList')
            reset()
        }
    })

    const createUser = (data) => {
        return 0
    }

    return (
        <form className={style.createUserForm} onSubmit={handleSubmit(createUser)}>
            <div>
                <label>Логин</label>
                <input
                    {...register('login', {required: true})}
                    placeholder='Введи логин'/>
            </div>

            <div>
                <label>Email</label>
                <input
                    {...register('email')}
                    placeholder='Введи почту (при наличии)'/>
            </div>

            <div>
                <label>Фамилия</label>
                <input
                    {...register('lastname', {required: true})}
                    placeholder='Введи почту (при наличии)'/>
            </div>

            <div>
                <label>Имя</label>
                <input
                    {...register('firstname', {required: true})}
                    placeholder='Введи почту (при наличии)'/>
            </div>

            <div>
                <label>Отчество</label>
                <input
                    {...register('middlename', {required: true})}
                    placeholder='Введи почту (при наличии)'/>
            </div>

            <div style={{display: "flex"}}>
                <label>Должность</label>
                <SearchInput searchObject={searchObject.job} clickResult={(e) => setValue('job', e, {})
                }/>
            </div>

            <div style={{display: "flex"}}>
                <label>Организация</label>
                <SearchInput searchObject={searchObject.org} clickResult={(e) => setValue('org', e, {})
                }/>
            </div>

            <div style={{display: "flex"}}>
                <label>Роли</label>
                <SelectField values={useRoleList} handleChange={(e) => {
                    setValue('role', e)
                    console.log(getValues('role'))
                }} />
            </div>


        </form>
    )
}

export default CreateUserForm