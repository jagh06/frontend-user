"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/principal/Login.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { baseURL } from "@/baseURL";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idhotel, setIdGet] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idGet = urlParams.get("id");
    setIdGet(idGet);
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const userExists = await authenticateUser(email, password);
      console.log("datos deuser", userExists.data.user._id);
      localStorage.setItem(
        "iTemp_User",
        JSON.stringify(userExists.data.user._id)
      );
      localStorage.setItem("iTemp_Hotel", JSON.stringify(idhotel));
      if (userExists) {
        localStorage.setItem(
          "loged_user_authentication",
          JSON.stringify(userExists.data)
        );
        router.push("../reservar");
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
      setErrorLogin("Las credenciales no coinciden.");
      console.log("No se pudo authenticar:", error);
    }
  };

  return (
    <Layout>
      <main className="contenedor">
        <div className={styles.divprincipal}>
          <div className={styles.divform}>
            <h2 className={styles.title}>Inicia sesion</h2>
            <form className={styles.form} onSubmit={handleSumbit}>
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
              <br /> <br />
              <Link className={styles.newpassword} href="../searchemail">
                ¿Olvidaste tu contraseña?
              </Link>
              <br /> <br />
              <div className={styles.linkregistro}>
                <Link href="../registro">
                  <span style={{fontSize:13}}>¿No estas registrado? </span> <br />
                  Registrate
                </Link>
              </div>
              <div className={styles.errorlogin}>
                {errorLogin && <p>{errorLogin}</p>}
              </div>
              <div className={styles.divbutton}>
                <button>Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
