import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home/Home";
import NavBarA from "../components/NavBar/Navbar";
import ItemDetailContainer from "../components/Home/Container/ItemDetailContainer";
import ItemListContainer from "../components/Home/Container/ItemListContainer";

function Router(){
    return(
        <BrowserRouter>
            <NavBarA/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/categoria/:cat" element={<ItemListContainer/>}></Route>
                <Route path="/:categoria/:idProducto" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;