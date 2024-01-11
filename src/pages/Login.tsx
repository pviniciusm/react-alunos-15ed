import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate();

    const submeterLogin = async (event: any) => {
        try {
            event.preventDefault();

            const body = {
                email: event.target.email.value,
                senha: event.target.password.value,
            };

            const result = await axios.post("http://localhost:3335/login", body);

            console.log(result.data);
            alert("Login realizado com sucesso");

            localStorage.setItem("user", JSON.stringify(result.data.data));
            navigate("/");
        } catch (error: any) {
            console.log(error.response.data.message);
            alert(error.response.data.message);
        }
    };

    return (
        <>
            <Header />

            <div>
                <h2>Faça o seu login</h2>
                <form onSubmit={submeterLogin}>
                    <div>
                        <span>Email: </span>
                        <input type="email" name="email" required />
                    </div>
                    <div>
                        <span>Senha:</span>
                        <input type="password" name="password" required />
                    </div>
                    <div>
                        <button>Submeter</button>
                    </div>
                </form>
            </div>
        </>
    );
};
