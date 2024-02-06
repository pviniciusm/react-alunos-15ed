import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import axios from "axios";
import { Button, Container, styled } from "@mui/material";
import TextField from '@mui/material/TextField';
import { User } from "../models/user.model";
import { useAppDispatch } from "../config/hooks";
import { login } from "../config/modules/user.slice";

const ContainerStyled = styled(Container)`
    padding-top: 20px;

    h2 {
        text-align: center;
        margin-bottom: 12px;
    }

    .input-div {
        width: 100%;
        margin: 8px 0;
    }

    button {
        margin: auto;
    }
`;

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const submeterLogin = async (event: any) => {
        try {
            event.preventDefault();

            const body = {
                email: event.target.email.value,
                senha: event.target.password.value,
            };

            // to-do: chamar a API

            const result: User = {
                id: "9999",
                nome: "Daphne",
                token: "12345-teste"
            }

            // setar o usuário logado
            dispatch( login(result) );

            navigate("/");
        } catch (error: any) {
            console.log(error.response.data.message);
            alert(error.response.data.message);
        }
    };

    return (
        <>
            <Header />

            <ContainerStyled maxWidth="sm">
                <h2>Faça o seu login</h2>
                <form onSubmit={submeterLogin}>
                    <div className="input-div">
                        <TextField fullWidth label="E-mail" variant="outlined" name="email" />
                    </div>
                    <div className="input-div">
                        <TextField fullWidth label="Senha" variant="outlined" name="password" type="password" />
                    </div>
                    <div>
                        <Button type="submit" variant="contained">Login</Button>
                    </div>
                </form>
            </ContainerStyled>
        </>
    );
};
