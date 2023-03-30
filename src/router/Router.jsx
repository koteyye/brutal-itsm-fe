import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../components/pages/main-page/Main-page";
import AdminPanel from "../components/pages/admin-panel/Admin-panel";
import {RoutesNames} from "./Routes-names.js";
import Testpage from "../components/pages/test-page/Test-page";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesNames.MainPage.Path} element={<MainPage />} />
                <Route path={RoutesNames.AdminPanel.Path} element={<AdminPanel />} />
                <Route path={RoutesNames.TestPage.Path} element={<Testpage />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router