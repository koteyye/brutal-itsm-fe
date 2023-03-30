import {useForm} from "react-hook-form";
import style from "../Admin-panel.module.css"
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useCreateUser, useRoleList} from "../../../../hooks/useUser.js";
import SearchInput from "../../../UI/search-input/Search-input.jsx";
import {searchObject} from "../../../../hooks/useSearch.js";
import SelectField from "../../../UI/select/Select.jsx";
import Btn from "../../../UI/btn/Btn.jsx";

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
        return console.log(data)
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
            {...register("login", { required: true })}
            placeholder="Введи логин"
          />
        </div>

        <div className={style.createUserFormField}>
          <label>Email</label>
          <input
            {...register("email")}
            placeholder="Введи почту (при наличии)"
          />
        </div>

        <div className={style.createUserFormField}>
          <label>Фамилия</label>
          <input
            {...register("lastname", { required: true })}
            placeholder="Введи почту (при наличии)"
          />
        </div>

        <div className={style.createUserFormField}>
          <label>Имя</label>
          <input
            {...register("firstname", { required: true })}
            placeholder="Введи почту (при наличии)"
          />
        </div>

        <div className={style.createUserFormField}>
          <label>Отчество</label>
          <input
            {...register("middlename", { required: true })}
            placeholder="Введи почту (при наличии)"
          />
        </div>

        <div className={style.createUserFormSearch}>
          <label>Должность</label>
          <SearchInput
            placeholderText="Начни вводить должность для поиска"
            searchObject={searchObject.job}
            clickResult={(e) => setValue("job", e, {})}
          />
        </div>

        <div className={style.createUserFormSearch}>
          <label>Организация</label>
          <SearchInput
            placeholderText="Начни вводить организацию для поиска"
            searchObject={searchObject.org}
            clickResult={(e) => setValue("org", e, {})}
          />
        </div>

        <div className={style.createUserFormSelect}>
          <label>Роли</label>
          <SelectField
            values={useRoleList}
            handleChange={(e) => {
              setValue("role", e);
              console.log(getValues("role"));
            }}
          />
        </div>
          <div style={{display: "flex", placeContent: "center", marginTop: "20px"}}>
            <Btn color="green" label="Создать" click={handleSubmit(createUser)} />
          </div>
      </form>
    );
}

export default CreateUserForm
