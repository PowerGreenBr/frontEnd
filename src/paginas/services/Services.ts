
import axios from "axios";

export const api = axios.create({
baseURL: 'https://powergreenbr.onrender.com/'
})

export const login = async(url: any, dados: any, setDados: any) => {
const resposta = await api.post(url, dados)
setDados(resposta.data.token)
}
export const cadastro = async(url: string, dados: Object, setDados: Function) => {
const resposta = await api.post(url, dados)
setDados(resposta.data)}