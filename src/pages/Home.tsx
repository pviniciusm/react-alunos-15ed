import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ListaAvaliacoes } from "../components/ListaAvaliacoes";
import { Avaliacao } from "../models/avaliacao.model";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user.model";

export const Home = () => {
    const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
    const [user, setUser] = useState<User>();

    const usuarioLogado = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        if (!usuarioLogado) {
            alert("Sessão expirada, faça o login novamente!");
            navigate("/login");
            return;
        }

        setUser(JSON.parse(usuarioLogado));
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

    return (
        <>
            <Header />

            <h1>Bem vindo!</h1>
            <h2>Lista de avaliações</h2>

            <ListaAvaliacoes avaliacoes={avaliacoes} />

            <br />

            <div>
                <button onClick={() => listarAvaliacoes()}>Atualizar lista</button>
                <button onClick={() => navigate("/avaliacao")}>Criar nova avaliação</button>
            </div>
            <div>
                <button onClick={realizarLogout}>Sair</button>
            </div>
        </>
    );
};
