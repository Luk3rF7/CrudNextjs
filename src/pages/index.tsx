import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    clienteSelecionado,
    clienteExcluido,
    tabelaVisivel,
    exibirTabela,
  } = useClientes()

  return (
    <div className={`
   flex justify-center items-center  h-screen
   bg-gradient-to-r from-black to-gray-500
   text-white
   `} >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-4 from-gray-500 to-gray-700
                "
                onClick={novoCliente}
              >
                Novo cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>

        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />

        )}
      </Layout>
    </div>

  )
}