"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/principal/Login.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginInfo = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const userExists = await authenticateUser(email, password);
      console.log("datos deuser", userExists.data.user._id);
      localStorage.setItem(
        "iTemp_User",
        JSON.stringify(userExists.data.user._id)
      );
      if (userExists) {
        router.push("../informacion");
      }
    } catch (error) {
      console.log("ERROR_GET_ITEM");
    }
  };
  const authenticateUser = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        { email: email, password: password }
      );
      return response.data;
    } catch (error) {
      setErrorLogin("Las credenciales no coinciden");
      console.log("No se pudo authenticar:", error);
    }
  };

  return (
    <Layout>
      <main className="contenedor">
        <div className={styles.divprincipal}>
          <div className={styles.divform}>
            <h2>Inicia sesion</h2>
            <form onSubmit={handleSumbit}>
              <label>
                <p>Correo electronico</p>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electronico"
                  required
                />
              </label>
              <label>
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
              <div className={styles.linkregistro}>
                <p>¿No estas registrado? </p>
                <Link href="../registro"> Registrate</Link>
              </div>
              <div className={styles.errorlogin}>
                {errorLogin && (<p>{errorLogin}</p>)}
              </div>

              <div className={styles.divbutton}>
                <button>Iniciar sesion</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default LoginInfo;
