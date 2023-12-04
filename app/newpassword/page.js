"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useRouter } from "next/navigation";
import { baseURL } from "@/baseURL";

const NewPassword = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [idu, setIdGet] = useState("");

  useEffect(() => {
    const iduser = new URLSearchParams(window.location.search);
    const idGet = iduser.get("temporary");
    setIdGet(idGet);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubit(newPassword);
  };

  const onSubit = async (data) => {
    const response = await axios.put(
      `${baseURL}api/users/newpassword/${idu}`,
      {
        password: data,
      }
    );
    if (response.status === 200) {
      router.push("/");
    }
  };
  return (
    <Layout>
      <main className="contenedor">
        <div>
          <p>Nuevo password</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Nueva contraseña"
              required
            />
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default NewPassword;
