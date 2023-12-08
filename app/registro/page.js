"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/principal/Registro.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { baseURL } from "@/baseURL";

const Registro = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userexists, setUserExixts] = useState("");
  useEffect(() => {});

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  const onSubmit = async (e) => {
    try {
      await submitDataToBackend({
        name: name,
        email: email,
        password: password,
      });
    } catch (error) {
      console.log("ERROR_ITEMS");
    }
  };

  const submitDataToBackend = async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}api/users/newuser/`,
        {
          name: data.name,
          email: data.email,
          password: data.password,
        }
      );
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      setUserExixts("El usuario ya existe");
      console.log("ERROR_POST_ITEM");
    }
  };

  return (
    <Layout>
      <main className="contenedor">
        <div className={styles.divprincipal}>
          <div className={styles.divform}>
            <h2>Registrate</h2>
            <form onSubmit={handleFormSubmit}>
              <label className={styles.label}>
                <p>Nombre</p>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombre"
                  required
                />
              </label>
              <label  className={styles.label}>
                <p>Correo electronico</p>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electronico"
                  required
                />
                {userexists && (
                  <div className={styles.userexists}>{userexists}</div>
                )}
              </label>
              <label  className={styles.label}>
                <p>Contraseña</p>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  required
                />
              </label>
              <div className={styles.divbutton}>
                <button>Registrarse</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Registro;
