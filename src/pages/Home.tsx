import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ListaAvaliacoes } from "../components/ListaAvaliacoes";
import { Avaliacao } from "../models/avaliacao.model";
import axios from "axios";

export const Home = () => {
    const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

    useEffect(() => {
        listarAvaliacoes();
    }, []);

    const listarAvaliacoes = async () => {
        try {
            const result = await axios.get(
                "http://localhost:3335/aluno/3a862521-db99-4d6d-9b0a-b16f56a1b7e6/avaliacao"
            );

            console.log(result.data.data);
            setAvaliacoes(result.data.data);
        } catch (error: any) {
            setAvaliacoes([]);
            console.log(error);
            alert("A requisição deu erro!");
        }
    };

    return (
        <>
            <Header />

            <h1>Bem vindo!</h1>
            <h2>Lista de avaliações</h2>
            <button onClick={listarAvaliacoes}>Atualizar lista</button>

            <ListaAvaliacoes avaliacoes={avaliacoes} />
        </>
    );
};
