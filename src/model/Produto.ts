import Planos from "./Planos";
import Usuario from './Usuario';

interface Produto{
	id: Number;
	nome: string;
	capacidade: 0;
	numero_saidas: 0;
	foto: string;
	descricao: string;
	plano?: Planos | null;
	usuario?: Usuario | null;
}
export default Produto;
