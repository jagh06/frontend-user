"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/principal/Index.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Hospedajes = () => {
  const router = useRouter();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    try {
      const fetchDatas = async () => {
        const respuesta = await axios.get("http://localhost:3001/api/hotels");
        setDatas(respuesta.data.data);
      };
      fetchDatas();
    } catch (error) {
      console.log("ERROR_GET_ITEMS");
    }
  }, []);

  const handleDatas = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className={styles.banner}>
        <main className="contenedor">
          <div className={styles.primero}>
            <div className={styles.bannerquestion}>
              <div className={styles.divquestion}>
                <h3>¿Quiere ser cliente de Turingo Space?</h3>
              </div>
              <div className={styles.divbutton}>
                <h4>
                  Somos una empresa dedicada a la promoción de hospedajes.{" "}
                </h4>
                <button className={styles.bannerbutton}>
                  <Link
                    className={styles.linkstyle}
                    href={"http://localhost:3002"}
                  >
                    Registra tu hospedaje
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <main className="contenedor">
        <div>
          <div className={styles.h1}>
            <h1>Hospedajes</h1>
          </div>

          <div>
            {datas ? (
              <div>
                {datas.map((index) => (
                  <div key={index._id} className={styles.hotel}>
                    <div className={styles.image}>
                      <Image
                        className={styles.img}
                        src={index.images[0].secure_url}
                        width={200}
                        height={200}
                        alt="Hotel"
                        priority
                      />
                    </div>
                    <div className={styles.detalles}>
                      <h3>{index.namehotel}</h3>
                      <p>{index.description}</p>
                      <p>Tel. {index.phone}</p>
                      <p>Precio/noche MXN ${index.price}</p>
                    </div>
                    {index.disponible === true ? (
                      <div className={styles.selectbutton}>
                        <Link
                          href={{
                            pathname: `../details`,
                            query: { id: index._id },
                          }}
                        >
                          Ver Hotel
                        </Link>
                      </div>
                    ) : (
                      <div className={styles.selectbutton}>
                        <h4>No hay cuartos disponibles</h4>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div>Cargando...</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hospedajes;
