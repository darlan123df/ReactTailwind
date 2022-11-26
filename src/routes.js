import { BrowserRouter, Routes, Route} from "react-router-dom"

import Logon from "./pages/Logon"
import Home from "./pages/Home"

export default function MainRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Logon/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
        </BrowserRouter>
    )
}