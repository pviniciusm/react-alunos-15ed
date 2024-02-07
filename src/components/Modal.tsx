import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { fecharModal } from "../config/modules/modal.slice";
import { Avaliacao } from "../models/avaliacao.model";
import { criarAvaliacao } from "../config/modules/avaliacoes.slice";

export function Modal() {
    const isOpen = useAppSelector(state => state.modal);
    const dispatch = useAppDispatch();

    const fechar = () => {
        dispatch(fecharModal());
    }

    const submitForm = (event: any) => {
        event.preventDefault();

        const avaliacao: Avaliacao = {
            disciplina: event.target.disciplina.value,
            nota: event.target.nota.value,
            id: "12222",
            idAluno: "12221223"
        };

        dispatch(criarAvaliacao(avaliacao));
        dispatch(fecharModal());
    }

    return (
        <Dialog open={isOpen} onClose={fechar}>
            <DialogTitle>Criar uma nova avaliação</DialogTitle>

                <form onSubmit={submitForm}>
                    <DialogContent>
                            <TextField sx={{ mb: 2 }} fullWidth name="disciplina" variant="outlined" label="Disciplina"></TextField>
                            <TextField fullWidth type="number" name="nota" variant="outlined" label="Nota" InputProps={{
                                inputProps: {
                                    min: 1,
                                    max: 10
                                }
                            }}></TextField>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={fechar}>Cancelar</Button>
                        <Button variant="contained" type="submit">Salvar</Button>
                    </DialogActions>
                </form>
        </Dialog>
    )
}