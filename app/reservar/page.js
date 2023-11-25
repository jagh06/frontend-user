"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/principal/Reservar.module.css";

const Reservar = () => {
  const router = useRouter();
  const [datas, setDatas] = useState([]);
  const [idhotel, setIdGet] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idGet = urlParams.get("id");
    setIdGet(idGet)
    try {
      const fetchData = () => {};
    } catch (error) {}
  }, []);
  return (
    <Layout>
      <main className="contenedor">
        <div className={styles.divprincipal}>
          <div className={styles.form}>
          <p>Reservar a {idhotel}</p>
            <form>
              <div className={styles.divinfo}>
                <h3>Informacion de contacto</h3>
                <label>
                  <p>Nombre completo</p>
                  <input type="text" placeholder="Tu Nombre" />
                </label>
                <label>
                  <p>Agrega tu correo</p>
                  <input type="email" placeholder="Tu Correo" />
                </label>
                <label>
                  <p>Agrega un telefono</p>
                  <input placeholder="Tu Teléfono" />
                </label>
              </div>
              <div className={styles.divnpersonas}>
                <h3>Número de personas</h3>
                <label>
                  <p>¿Con cuantas personas viaja contigo?</p>
                  <input type="number" placeholder="Número de personas" />
                </label>
              </div>
              <div className={styles.divfecha}>
                <h3>Fecha de llegada</h3>
                <label>
                  <p>Fecha de llegada</p>
                  <input type="date" placeholder="Fecha de llegada" />
                </label>
              </div>
              <p>Numero de reserva aleatorio</p>
              <div className={styles.buttonreservas}>
                <button>Reservar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Reservar;
