import Planos from "./Planos";

interface Produto{
    id: Number;
    nome: string;
    capacidade: 0;
    numero_saidas: 0;
    foto: string;
    descricao: string;
    plano?: Planos | null;
    usuario?: {} | null;
}

export default Produto;