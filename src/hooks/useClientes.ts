import { useState } from  "react";
import { useEffect } from "react";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useTabelaForm from "./useTabelaForm";


export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const{
        tabelaVisivel,
        exibirFormulario,
        exibirTabela,
    } = useTabelaForm()

    const [cliente,setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes,setClientes] = useState<Cliente[]>([])
    // const [visivel,setVisivel]= useState< 'tabela' | 'form'>( 'tabela')
  
  useEffect(obterTodos,[])
  
  function obterTodos(){
    repo.obterTodos().then(clientes =>{
      setClientes(clientes)
      exibirTabela()
    })
  }
  
    function clienteSelecionado(cliente: Cliente) {
   setCliente(cliente)
   exibirFormulario()
    }
    async function clienteExcluido(cliente: Cliente) {
      await repo.excluir(cliente)
      obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio())
     exibirFormulario()
    }
    async function salvarCliente(cliente:Cliente){
      await repo.salvar(cliente)
      obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        clienteExcluido,
        clienteSelecionado,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }
}