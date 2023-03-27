import style from '../Admin-panel.module.css'

export const UserList = (props) => {


    return (<div className={style.userlist}>
        {props.userList.map((ul) => (<div>
            <span>{ul.login}</span>
            <span>{ul.lastname} {ul.firstname} {ul.middlename}</span>
            <span>{ul.job}</span>
            <span>{ul.org}</span>
        </div>))}
    </div>)
}