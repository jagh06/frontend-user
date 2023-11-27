"use client";
import Link from "next/link";
import styles from "../styles/principal/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <main className="contenedor">
        <div className={styles.contenido}>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="../nosotros">Nosotros</Link>
          </nav>

          <p className={styles.copyright}>Todos los derechos reservados</p>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
