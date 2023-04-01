import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../components/pages/main-page/Main-page";
import AdminPanel from "../components/pages/admin-panel/Admin-panel";
import {RoutesNames} from "./Routes-names.js";
import Testpage from "../components/pages/test-page/Test-page";
import UserItemView from "../components/pages/admin-panel/user-item-view/User-item-view.jsx";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesNames.MainPage.Path} element={<MainPage />} />
                <Route path={RoutesNames.AdminPanel.Path} element={<AdminPanel />} />
                <Route path={RoutesNames.UserItemView.Path} element={<UserItemView />} />
                <Route path={RoutesNames.TestPage.Path} element={<Testpage />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router