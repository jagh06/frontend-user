"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import styles from "../styles/principal/Informacion.module.css";
import { useRouter } from "next/navigation";

const Informacion = () => {
  const router = useRouter();
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

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/reservaciones/delete/${id}`
      );
      if (response.status === 200) {
        router.push("");
      }
    } catch (error) {
      console.log("ERROR_DELETE_RESERVATION");
    }
  };

  const deleteCache = () => {
    localStorage.removeItem("loged_user_authentication"); // Limpiar localStorage
    sessionStorage.clear(); // Limpiar sessionStorage (si es necesario)
    router.push("/");
  };

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
                <button className={styles.buttonlogout} onClick={deleteCache}>
                  Salir
                </button>
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
                        <span>{index.numpersonas}</span> personas por{" "}
                        <span>{index.numdenoches}</span> noches.
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
                      <button
                        className={styles.button}
                        onClick={() => handleDelete(index._id)}
                      >
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
