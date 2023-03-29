import style from './Menu.module.css'

const Menu = (props) => {

    return (
        <div className={style.menuBody}>
            <h2>{props.title}</h2>
            <div className={style.menu}>
                {props.menuItems.map(mi => <label key={mi.id} onClick={() => props.click(mi.id)}>{mi.name}</label>)}
            </div>
        </div>
    )
}


export default Menu