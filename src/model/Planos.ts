import Produto from "./Produto";

export default interface Planos{

    id: number;
    nome: string;
    preco: number;
    produto?: Produto[] | null;

}
