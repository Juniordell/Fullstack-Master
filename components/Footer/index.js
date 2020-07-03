import React from "react"

const Footer = () => {
    return (
        <div className="bg-gray-700 p-4">
            <div className="container mx-auto text-center font-bold text-white">
                Projeto desenvolvido por: {'  '}
                <a className="px-2 hover:underline" href="https://nelsonjrportfolio.imfast.io/">Nelson Jr</a> / {'  '}
                <a className="px-2 hover:underline" href="https://www.linkedin.com/in/nelson-dellosbel-junior-ba80211ab/">Linkedin</a> / {'  '} 
                <a className="px-2 hover:underline" href="https://github.com/Juniordell">Github</a>
                <div className="mt-4">
                    <img className="inline p-4 w-64" src="/logo_semana_fsm.png" />
                    <img className="inline p-4" src="/logo_devpleno.png" />
                </div>
            </div>
        </div>
    )
}

export default Footer