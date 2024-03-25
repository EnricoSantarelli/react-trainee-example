import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PokemonPage from "./pages/PokemonsPage/PokemonPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./ui/components/Header/Header";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemons" element={<PokemonPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter >
    )
}