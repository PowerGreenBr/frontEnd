import axios from "axios";

export const api = axios.create({
baseURL: 'https://powergreenbr.onrender.com'
})

export const login = async(url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// Tipagem de dados da função assincrona:
// url: string => a url, sempre será um texto, portanto a anotação de string nela
// dados: Object => os dados que enviamos para o nosso backend, sempre irão no padrão JSON, que para o typescript, é um Objeto
// setDados: Function => sempre iremos executar uma função para atualizar os dados, por isso, a tipagem de Função
export const cadastro = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const busca = async(url: any, setDados: any, headers: any) => {
  const resposta = await api.get(url, headers)
  setDados(resposta.data)
}

export const buscaId = async(url: any, setDados: any, headers: any) => {
  const resposta = await api.get(url, headers)
  setDados(resposta.data)
}

export const post = async(url: any, dados: any, setDados: any, headers: any) => {
  const resposta = await api.post(url, dados, headers)
  setDados(resposta.data)
}

export const put = async(url: any, dados: any, setDados: any, headers: any) => {
  const resposta = await api.put(url, dados, headers)
  setDados(resposta.data)
}

export const deleteId = async(url: any, headers: any) => {
  await api.delete(url, headers)
}