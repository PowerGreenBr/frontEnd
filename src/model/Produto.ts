import Categoria from './Planos'

interface Produto{
    planos: any;

    id: Number;
    titulo: string;
    texto: string;
    categoria?: Categoria| null

}

export default Produto;