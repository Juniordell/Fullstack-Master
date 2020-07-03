import React from "react"
import Link from "next/link"

const Pesquisa = () => {
    return (
        <div className="pt-6">
            <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
            <p className="mb-6 text-center">
                O restaurante X sempre busca por atender melhor seus clientes. <br/>
                Por isso, estamos sempre aberto a ouvir sua opinião.
            </p>
            <div className="w-1/5 mx-auto">
                <label className="font-bold">Seu nome:</label>
                <input type="text" className="p-4 block shadow bg-blue-100 m-2 rounded"></input>
            </div>
        </div>
    )
}

export default Pesquisa