import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ListaAvaliacoes } from "../components/ListaAvaliacoes";
import { Avaliacao } from "../models/avaliacao.model";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { Button } from "@mui/material";
import { Modal } from "../components/Modal";
import { abrirModal } from "../config/modules/modal.slice";

export const Home = () => {
    const avaliacoes = useAppSelector(state => state.avaliacoes);
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            alert("Sessão expirada, faça o login novamente!");
            navigate("/login");
            return;
        }
    }, []);

    // useEffect(() => {
    //     if (!user) {
    //         return;
    //     }

    //     listarAvaliacoes();
    // }, [user]);

    // const listarAvaliacoes = async () => {
    //     try {
    //         const result = await axios.get(`http://localhost:3335/aluno/${user?.id}/avaliacao`);

    //         console.log(result.data.data);
    //         setAvaliacoes(result.data.data);
    //     } catch (error: any) {
    //         setAvaliacoes([]);
    //         console.log(error);
    //         alert("A requisição deu erro!");
    //     }
    // };

    const realizarLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const criarAvaliacao = () => {
        dispatch(abrirModal());
    };

    return (
        <>
            <Header />

            <Container>
                <Modal />

                <h2>Lista de avaliações</h2>

                <ListaAvaliacoes avaliacoes={avaliacoes} />

                <br />

                <div>
                    <Button variant="contained" onClick={criarAvaliacao}>Criar nova avaliação</Button>
                </div>
                <div>
                    <button onClick={realizarLogout}>Sair</button>
                </div>
            </Container>
        </>
    );
};
