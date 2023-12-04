"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/principal/Reservar.module.css";
import axios from "axios";
import { baseURL } from "@/baseURL";

const Reservar = () => {
  const router = useRouter();
  const [idho, setIdHotel] = useState("");
  const [idus, setIdUser] = useState("");

  const [emailowner, setEmailOwner] = useState("");
  const [namehotel, setNameHotel] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [phone, setPhone] = useState("");
  const [personas, setPersonas] = useState("");
  const [nonoches, setNoNoches] = useState("");
  const [fecha, setFecha] = useState("");



  useEffect(() => {
    const idHotel = localStorage.getItem("iTemp_Hotel");
    const idUser = localStorage.getItem("iTemp_User");

    const idh = JSON.parse(idHotel);
    const idu = JSON.parse(idUser);
    setIdHotel(idh);
    setIdUser(idu);

    try {
      const fetchDataUser = async () => {
        const response = await axios.get(`${baseURL}api/users/${idu}`);
        setNombre(response.data.data.name);
        setCorreo(response.data.data.email)
      }
      fetchDataUser();
    } catch (error) {
      console.log("ERROR_GET_USER_DETAILS")
    }
   
    try {
      const fetchData = async () => {
        const responsehotel = await axios.get(
          `${baseURL}api/hotels/getforuser/${idh}`
        );
        setEmailOwner(responsehotel.data.data.emailowner);
        setNameHotel(responsehotel.data.data.namehotel);
        setCity(responsehotel.data.data.city);
        setStreet(responsehotel.data.data.street);
      };
      fetchData();
    } catch (error) {
      console.log("ERROR_GET_HOTEL_DETAILS");
    }
  }, []);

  const handleFormSubmit = async (e) => {
    console.log(idho, idus);
    e.preventDefault();
    onSubmit({ nombre, correo, phone, personas, fecha, nonoches});
  };

  const onSubmit = async (e) => {
    try {
      await submitDataToBackend({
        emailowner: emailowner,
        namehotel: namehotel,
        city: city,
        street: street,
        nombre: nombre,
        correo: correo,
        phone: phone,
        personas: personas,
        nonoches:nonoches,
        fecha: fecha,
      });
    } catch (error) {
      console.log("Error add new reservation");
    }
  };

  const submitDataToBackend = async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}api/reservaciones/`,
        {
          emailowner: data.emailowner,
          namehotel: data.namehotel,
          city: data.city,
          street: data.street,
          idhotel: idho,
          iduser: idus,
          name: data.nombre,
          email: data.correo,
          phone: data.phone,
          numpersonas: data.personas,
          fechallegada: data.fecha,
          numdenoches: data.nonoches
        }
      );
      if (response.status === 200) {
        router.push("../informacion");
      }
    } catch (error) {
      console.log("ERROR_ADD_NEW_RESERVATION");
    }
  };

  return (
    <Layout>
      <main className="contenedor">
        <div className={styles.divprincipal}>
          <div className={styles.form}>
            <p>Reservar a {namehotel}</p>
            <form onSubmit={handleFormSubmit}>
              <div className={styles.divinfo}>
                <h3>Informacion de contacto</h3>
                <label>
                  <p>Nombre completo</p>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu Nombre"
                    required
                  />
                </label>
                <label>
                  <p>Agrega tu correo</p>
                  <input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="Tu Correo"
                    required
                  />
                </label>
                <label>
                  <p>Agrega un telefono</p>
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Tu Teléfono"
                    required
                  />
                </label>
              </div>
              <div className={styles.divnpersonas}>
                <h3>Número de personas</h3>
                <label>
                  <p>¿Con cuantas personas viaja contigo?</p>
                  <input
                    type="number"
                    value={personas}
                    onChange={(e) => setPersonas(e.target.value)}
                    placeholder="Número de personas"
                    required
                  />
                </label>
              </div>
              <div className={styles.divnumeronoches}>
                <h3>Número de noches</h3>
                <label>
                  <p>Numero de noches</p>
                  <input
                    type="number"
                    value={nonoches}
                    onChange={(e) => setNoNoches(e.target.value)}
                    placeholder="Número de noches"
                    required
                  />
                </label>
              </div>
              <div className={styles.divfecha}>
                <h3>Fecha de llegada</h3>
                <label>
                  <p>Fecha de llegada</p>
                  <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    placeholder="Fecha de llegada"
                    required
                  />
                </label>
              </div>
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
