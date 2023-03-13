import Categoria from './Categoria'

interface Produto{

    id: Number;
    titulo: string;
    texto: string;
    categoria?: Categoria| null

}

export default Produto;