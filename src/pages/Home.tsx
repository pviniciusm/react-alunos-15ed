import { Header } from "../components/Header";

export const Home = () => {
    return (
        <>
            <Header />

            <h1>Bem vindo!</h1>
            <h2>Lista de avaliações</h2>

            <ul>
                <li>Avaliação 1</li>
                <li>Avaliação 2</li>
            </ul>
        </>
    );
};