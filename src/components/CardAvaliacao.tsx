import styled from "styled-components";
import { Avaliacao } from "../models/avaliacao.model";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

interface CardAvaliacaoProps {
    avaliacao: Avaliacao;
}

const CardAvaliacaoStyled = styled.div`
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    padding: 12px;
    width: 30%;
`;

export const CardAvaliacao = (props: CardAvaliacaoProps) => {
    const navigate = useNavigate();

    const deletarAvaliacao = () => {};

    const atualizarAvaliacao = () => {
        localStorage.setItem("avaliacao", JSON.stringify(props.avaliacao));

        navigate("/avaliacao");
    };

    return (
        <CardAvaliacaoStyled>
            <h2>{props.avaliacao.disciplina}</h2>
            <p>Nota: {props.avaliacao.nota}</p>
            <Button onClick={deletarAvaliacao}>Deletar</Button>
            <Button onClick={atualizarAvaliacao}>Atualizar</Button>
        </CardAvaliacaoStyled>
    );
};
