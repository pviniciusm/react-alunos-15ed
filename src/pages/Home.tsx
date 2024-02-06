import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ListaAvaliacoes } from "../components/ListaAvaliacoes";
import { Avaliacao } from "../models/avaliacao.model";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import { useAppSelector } from "../config/hooks";

export const Home = () => {
    const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
    const user = useAppSelector(state => state.user);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            alert("Sessão expirada, faça o login novamente!");
            navigate("/login");
            return;
        }
    }, []);

    useEffect(() => {
        if (!user) {
            return;
        }

        listarAvaliacoes();
    }, [user]);

    const listarAvaliacoes = async () => {
        try {
            const result = await axios.get(`http://localhost:3335/aluno/${user?.id}/avaliacao`);

            console.log(result.data.data);
            setAvaliacoes(result.data.data);
        } catch (error: any) {
            setAvaliacoes([]);
            console.log(error);
            alert("A requisição deu erro!");
        }
    };

    const realizarLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const criarAvaliacao = () => {
        localStorage.removeItem("avaliacao");
        navigate("/avaliacao");
    };

    return (
        <>
            <Header />

            <Container>
                <h1>Bem vindo!</h1>
                <h2>Lista de avaliações</h2>

                <ListaAvaliacoes avaliacoes={avaliacoes} />

                <br />

                <div>
                    <button onClick={() => listarAvaliacoes()}>Atualizar lista</button>
                    <button onClick={criarAvaliacao}>Criar nova avaliação</button>
                </div>
                <div>
                    <button onClick={realizarLogout}>Sair</button>
                </div>
            </Container>
        </>
    );
};
