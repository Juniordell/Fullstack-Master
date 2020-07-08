import React, { useState } from "react"
import Link from "next/link"
import PageTitle from "../components/PageTitle"

const Contato = () => {

    const [ sended, setSended ] = useState(false)

    const enviar = () => {
        setSended(true)
    }

    const onChange = evt => {
        const valor = evt.target.value
        if (valor != '') {
            
        }
    }

    return (
        <div className="flex flex-col mx-auto px-auto w-64">
            <PageTitle title="Contato" />
            <h1 className="text-center text-4xl my-10">Contato</h1>

            { !sended && 
                <div>
                    <label className="block pb-2">Nome</label>
                    <input type="text" id="in" className="w-full outline-none border p-4 block shadow bg-blue-200 mb-2 rounded" onChange={onChange} name="nome" placeholder="Seu nome" />
                    <label className="block pb-2">E-mail</label>
                    <input type="text" className="w-full outline-none p-4 block shadow bg-blue-200 mb-2 rounded" name="email" placeholder="Email" />
                    <label className="block pb-2">Mensagem</label>
                    <textarea type="text" className="w-full h-48 resize-none outline-none p-4 block shadow bg-blue-200 rounded" placeholder="Digite sua mensagem..." />
                    <button className="bg-blue-400 w-full mt-8 px-6 border-2 border-blue-400 duration-500 text-white py-4 font-bold rounded-lg shadow-lg hover:shadow hover:bg-transparent hover:text-blue-400" onClick={enviar}>Enviar</button>
                </div>
            }

            { sended && 
                <div className="bg-green-400 py-6 px-4 border-t border-b border-green-600">

                    <p className="text-center text-white">Mensagem enviada com sucesso!</p>

                </div>
            }
            

        </div>
    )
}

export default Contato