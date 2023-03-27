import {useQuery} from "react-query";
import {useUserList} from "../../../hooks/useUser.js";
import {UserList} from "./user-list/User-list";


export const adminPanel = () => {
    const {isLoading, error, data} = useQuery('usersList', useUserList)
    if(isLoading) return <p>Згарузка...</p>


    return (
        <div>
            <main>
            <UserList userList={data.data} />
            </main>
            <aside>

            </aside>
        </div>
    )
}

export default adminPanel