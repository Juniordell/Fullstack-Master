import React, { useState } from "react"
import PageTitle from "../components/PageTitle"

const Pesquisa = () => {
    const [ form, setForm ] = useState({  
        Nome: "",
        Email: "",
        Whatsapp: "",
        Nota: 5
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [ sucess, setSucess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})

    const save = async () => {
        try {
            const response = await fetch('api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            console.log(data)

            const data = await response.json()
            setSucess(true)            
            setRetorno(data)

        } catch(err) {
            
        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className="pt-6">
            <PageTitle title="Pesquisa" />
            <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
            <p className="mb-6 text-center">
                O restaurante X sempre busca por atender melhor seus clientes. <br/>|
                Por isso, estamos sempre aberto a ouvir sua opinião.
            </p>
            { !sucess && 
            <div className="w-1/5 mx-auto">
                <label className="font-bold">Seu nome:</label>
                <input type="text" className="p-4 block shadow w-full outline-none bg-blue-200 m-2 rounded" placeholder="Nome" onChange={onChange} name="Nome" value={form.Nome} ></input>
                <label className="font-bold">E-mail:</label>
                <input type="text" className="p-4 block w-full shadow outline-none bg-blue-200 m-2 rounded" placeholder="Email" onChange={onChange} name="Email" value={form.Email} ></input>
                <label className="font-bold">Whatsapp:</label>
                <input type="text" className="p-4 block w-full shadow outline-none bg-blue-200 m-2 rounded" placeholder="Whatsapp" onChange={onChange} name="Whatsapp" value={form.Whatsapp} ></input>
                <label className="font-bold">Nota:</label>
                <div className="flex py-6">
                    { notas.map( nota => {
                        return (
                            <label className="block w-1/6 text-center">
                                {nota} <br />
                                <input type="radio" name="Nota" value={nota} onChange={onChange}/>
                            </label>
                            )
                    })}
                </div>
                <button className="bg-blue-400 px-6 py-4 border-2 border-blue-400 duration-500 text-white w-full font-bold rounded-lg shadow-lg hover:shadow hover:bg-transparent hover:text-blue-400" onClick={save}>Save</button>
            </div> }
            { sucess && <div className="w-1/5 mx-auto">
                <p className="mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">Obrigado por contribuir com sua sugestão ou crítica.</p>
                {
                    retorno.showCoupon && <div className="text-center border p-4 mb-4">
                            Seu cupom: <br /> 
                            <span className="font-bold text-2xl">{retorno.Cupon}</span>
                        </div>
                }
                {
                    retorno.showCoupon && <div className="text-center border p-4 mb-4">
                            <span className="font-bold block mb-2">{retorno.Promo}</span>
                            <br />
                            <span className="italic">Tire print ou foto desta tela e apresente ao garçon.</span>
                        </div>
                }
                </div> }
        </div>
    )
}

export default Pesquisa