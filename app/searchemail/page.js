"use client";
import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "../styles/principal/SearchAndnew.module.css";
import { baseURL } from "@/baseURL";

const SearchEmail = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [exists, setExists] = useState("");

  const handleData = (e) => {
    e.preventDefault();
    fetchData(email);
  };

  const fetchData = async (data) => {
    try {
      const response = await axios.get(`${baseURL}api/users/email/${data}`);
      if (response.data.data[0] != null) {
        router.push(`../newpassword?temporary=${response.data.data[0]._id}`);
      } else {
        setExists("Esta cuenta no existe");
      }
    } catch (error) {
      console.log("ERROR_GET_ACCOUNT");
    }
  };

  return (
    <Layout>
      <main className="contenedor">
        <div className={styles.divpricipal}>
          <div className={styles.divform}>
            <h2>Busca tu cuenta</h2>
            <form onSubmit={handleData}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo"
                required
              />
            </form>
            {exists && <p>{exists}</p>}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SearchEmail;
