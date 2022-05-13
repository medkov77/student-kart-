import { Route, Routes } from "react-router-dom";
import CreateStudentPage from "./pages/createStudendPage";
import MainPage from "./pages/mainPage";
import EditStudentPage from "./pages/editStudentPage";

function App() {
    return (
        <Routes>
            <Route path="/" exact element={<MainPage />}></Route>
            <Route path="/create" element={<CreateStudentPage />}></Route>
            <Route path="/edit" element={<EditStudentPage />}></Route>
        </Routes>
    );
}
export default App;
