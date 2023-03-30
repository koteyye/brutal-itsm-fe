import SearchInput from "../../UI/search-input/Search-input";
import SelectField from "../../UI/select/Select"


const Testpage = () => {

    return (
        <div style={{margin: "20px"}}>
        <div style={{ display: "flex" }}>
          <label style={{marginRight: "10px", placeSelf: "center"}}>Тестовое поле</label>
                <SelectField values={RoleList} setValue={ (e) => console.log(e) } />
        </div>
      </div>
    );
}

export default Testpage

const RoleList = [
    {
        value: 1,
        label: "test1",
    },
    {
        value: 2,
        label: "test2",
    },
    {
        value: 3,
    label: "test3",
  },
];