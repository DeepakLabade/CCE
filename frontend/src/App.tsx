import "./App.css";
import EditorPage from "./pages/editor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/editor' element={<EditorPage/>} />
        </Routes>
    </BrowserRouter>
    )
};

export default App;
