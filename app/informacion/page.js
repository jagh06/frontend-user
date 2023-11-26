"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import styles from "../styles/principal/Informacion.module.css";

const Informacion = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reservationDetails, setReservationDetails] = useState("");

  const [phone, setPhone] = useState("");

  useEffect(() => {
    const iduser = localStorage.getItem("iTemp_User");
    const idu = JSON.parse(iduser);

    try {
      const fetchDataUser = async () => {
        const response = await axios.get(
          `http://localhost:3001/api/users/${idu}`
        );
        setName(response.data.data.name);
        setEmail(response.data.data.email);
      };
      fetchDataUser();
    } catch (error) {
      console.log("ERROR_GET_ITEM");
    }

    try {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:3001/api/reservaciones/iduser/${idu}`
        );
        setReservationDetails(response.data);
        //console.log(response.data);
      };
      fetchData();
    } catch (error) {
      console.log("ERROR_GET_ITEM");
    }
  }, []);
  console.log(reservationDetails);

  return (
    <Layout>
      <main className="contenedor">
        <div>
          <div className={styles.inforuser}>
            <div className={styles.divinfouser}>
              <h3>Información general</h3>
              <div>
                <p>
                  Nombre registrado: <span>{name}</span>
                </p>
                <p>
                  Correo electronico registrado: <span>{email}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.divinfo}>
            {reservationDetails ? (
              <div className={styles.lista}>
                <h3>Lista de Reservaciones</h3>
                {reservationDetails.data.map((index) => (
                  <div key={index._id} className={styles.divinforeservation}>
                    <div className={styles.divinformacion}>
                      <p>
                        Reservado para <span>{index.namehotel}</span> para{" "}
                        <span>{index.numpersonas}</span> personas.
                      </p>
                      <p>
                        Contacto: <span>{index.emailowner}</span>
                      </p>
                      <p>
                        Calle: <span>{index.street}</span>
                      </p>
                      <p>
                        Ciudad: <span>{index.city}</span>
                      </p>
                      <p>
                        Fecha programada: <span>{index.fechallegada}</span>
                      </p>
                    </div>
                    <div className={styles.divbutton}>
                      <button className={styles.button}>
                        Eliminar de la lista de reservas
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>No Hay nada que mostrar</div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Informacion;
