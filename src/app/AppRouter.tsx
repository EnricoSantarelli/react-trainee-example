import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./ui/components/Header/Header";
import PokemonsPage from "./pages/PokemonsPage/PokemonsPage";
import PokemonPage from "./pages/PokemonPage/PokemonPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemons" element={<PokemonsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/pokemon/:pokeId" element={<PokemonPage />} />
            </Routes>
        </BrowserRouter >
    )
}