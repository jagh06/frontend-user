"use client"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/principal/Header.module.css";

const Header = () => {

  return (
    <header className={styles.header}>
      <div >
        <div className={styles.barraandiconuser}>
          <div className={styles.barra}>
            <Link href="/">
              <Image width={120} height={60} src="/favicon.ico" alt="Image logo" />
            </Link>
            <nav className={styles.navegacion}>
              <Link href="/">Home</Link>
              
            </nav>
          </div>
          

          <div className={styles.iniciarsesion}>
            <div className={styles.linkiniciarsesion}>
            <Link href="../logininfo" >Cuenta</Link>

            </div>
          </div>
        </div>
       
      </div>
      
    </header>

  )
}



export default Header
