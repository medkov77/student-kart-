import { Route, Routes } from "react-router-dom";
import CreateStudentPage from "./pages/createStudendPage";
import MainPage from "./pages/mainPage";

function App() {
    return (
        <Routes>
            <Route path="/" exact element={<MainPage />}></Route>
            <Route path="/create" element={<CreateStudentPage />}></Route>
        </Routes>
    );
}
export default App;
