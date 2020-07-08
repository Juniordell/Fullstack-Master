import React from "react"
import styles from "./styles.module.css"
import Link from "next/link" 

const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className="container mx-auto">
                    <Link href="/">
                        <a><img className="mx-auto w-40" src="/logo_palpitebox.png" alt="PalpiteBox"></img></a>
                    </Link>
                </div>
            </div>
            <div className="bg-gray-300 p-4 shadow-md text-center">
                <Link href="/sobre">
                    <a className={styles.text}>Sobre</a>
                </Link>
                <Link href="/contato">
                    <a className={styles.text}>Contato</a>
                </Link>
                <Link href="/pesquisa">
                    <a className={styles.text}>Pesquisa</a>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header