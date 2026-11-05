import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import DetProdutos from "./pages/detProdutos/DetProdutos";
import AdmProdutos from "./pages/admProdutos/AdmProdutos";
import Login from "./pages/login/Login";



export default function App(){
    return(
        <>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<ListaProdutos/>} />
        <Route path="/detalheProduto" element={<DetProdutos/>}/>
        <Route path="/admprodutos" element={<AdmProdutos/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element=
        {<img className="container-notfound" src="https://cdn.dribbble.com/userupload/23466745/file/original-e90b58a278788e55bcd184bdb05c36f1.gif"/>}/>
        </Routes>
        <Footer />
        </>
    )
}