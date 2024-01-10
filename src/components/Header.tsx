import styled from "styled-components";

const HeaderStyled = styled.div`
    background-color: #0059a7;
    padding: 16px 8px;
    font-weight: bold;

    p {
        text-align: center;
    }
`;

export const Header = () => {
    return (
        <HeaderStyled>
            <p>API Alunos</p>
        </HeaderStyled>
    );
};
