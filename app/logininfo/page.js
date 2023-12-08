"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/principal/Login.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { baseURL } from "@/baseURL";

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
        localStorage.setItem(
          "loged_user_authentication",
          JSON.stringify(userExists.data)
        );
        router.push("../informacion");
      }
    } catch (error) {
      console.log("ERROR_GET_ITEM");
    }
  };
  const authenticateUser = async (email, password) => {
    try {
      const response = await axios.post(`${baseURL}api/users/login`, {
        email: email,
        password: password,
      });
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
            <h2 className={styles.title}>Inicia sesion</h2>
            <form onSubmit={handleSumbit}>
              <label>
                <p className={styles.subtitle}>Correo electronico</p>
                <input
                  className={styles.inputStyle}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electronico"
                  required
                />
              </label>
              <label>
                <p className={styles.subtitle}>Contraseña</p>
                <input
                  className={styles.inputStyle}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  required
                />
              </label>
              <Link className={styles.newpassword} href="../searchemail">
                ¿Olvidaste tu contraseña?
              </Link>
              <div className={styles.linkregistro}>
              <Link href="../registro" className={styles.linkr}>
                 ¿No estas registrado? 
                 <span style={{fontSize:13}}>Registrate</span>
                </Link>
              </div>
              <div className={styles.errorlogin}>
                {errorLogin && <p>{errorLogin}</p>}
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
