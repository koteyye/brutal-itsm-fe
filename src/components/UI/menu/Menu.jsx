import style from './Menu.module.css'

const Menu = (props) => {

    return (
        <div key={props.menuItems.id} className={style.menu}>
            <label onClick={() => props.click(props.menuItems.id)}>{props.menuItems.name}</label>
        </div>
    )
}



export default Menu