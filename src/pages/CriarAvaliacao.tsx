import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user.model";
import axios from "axios";

export const CriarAvaliacao = () => {
    const usuarioLogado = localStorage.getItem("user");
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        if (!usuarioLogado) {
            alert("Sessao expirada, faça o login novamente");
            navigate("/login");
            return;
        }

        setUser(JSON.parse(usuarioLogado));
    }, []);

    const criarAvaliacao = async (event: any) => {
        try {
            event.preventDefault();

            const body = {
                disciplina: event.target.disciplina.value,
                nota: event.target.nota.value,
            };

            if (body.nota < 0 || body.nota > 10) {
                alert("O valor da nota é inválido, informe um valor entre 0 e 10.");
                return;
            }

            const result = await axios.post(`http://localhost:3335/aluno/${user?.id}/avaliacao`, body, {
                headers: {
                    Authorization: user?.token,
                },
            });

            alert("Avaliação criada com sucesso!");
            navigate("/");
        } catch (error: any) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    return (
        <div>
            <h1>Crie uma nova avaliação</h1>

            <form onSubmit={criarAvaliacao}>
                <div>
                    <span>Disciplina:</span>
                    <input type="text" name="disciplina" required />
                </div>

                <div>
                    <span>Nota:</span>
                    <input type="number" name="nota" required />
                </div>

                <div>
                    <button>Criar</button>
                </div>
            </form>
        </div>
    );
};
