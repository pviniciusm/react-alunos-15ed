import styled from "styled-components";
import { Avaliacao } from "../models/avaliacao.model";
import { CardAvaliacao } from "./CardAvaliacao";

interface ListaAvaliacoesProps {
    avaliacoes: Avaliacao[];
}

const ListaContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    flex-wrap: wrap;
`;

export const ListaAvaliacoes = (props: ListaAvaliacoesProps) => {
    console.log(props);

    return (
        <ListaContainer>
            {props.avaliacoes.map((item) => {
                return <CardAvaliacao key={item.id} avaliacao={item} />;
            })}
        </ListaContainer>
    );
};
