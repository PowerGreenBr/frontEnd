import Produto from "./Produto";

export default interface Planos{

    id: Number;
    nome: string;
    preco: number;
    produto?: Produto[] | null;

}
