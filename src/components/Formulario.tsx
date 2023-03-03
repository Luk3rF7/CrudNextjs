import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";



interface FormularioProps {
    cliente: Cliente
    clienteMudou?:(cliente:Cliente)=> void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome,setNome] = useState(props.cliente?.nome ?? '')
    const [idade,setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
             {id ? (
             <Entrada 
             somenteLeitura
             texto="Código"
             valor={id} 
             className="mb-5"
             />
             ): false }
                 <Entrada 
                 texto="Nome"
                  valor={nome}
                  valorMudou={setNome}
                  className="mb-5"
                  />
            <Entrada 
            texto="Idade"
             tipo="number" 
             valor={idade}
             valorMudou={setIdade}
              />
              <div className="flex justify-end">
                <Botao className="mr-2 mt-4 to-green-400 from-green-700"
                onClick={() => props.clienteMudou?.(new Cliente(nome,+idade,id))}>
                {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao 
                className="md-2 mt-4 to-red-400 from-red-700"
                onClick={props.cancelado}
                >
                cancelar
                </Botao>
              </div>
        </div>
    )
}