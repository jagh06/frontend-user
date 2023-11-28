"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/principal/Index.module.css";

const Page = () => {
  const router = useRouter();
  const [datas, setDatas] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");
    fetchDatas(query);
  }, []);

  const fetchDatas = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/hotels/searchquery/${query}`
      );
      setDatas(response.data.data);
    } catch (error) {
      console.log("ERROR_GET_ITEMS");
    }
  };

  return (
    <Layout>
      <main className="contenedor">
        <div>
          <div className={styles.h1}>
            <h1>Resultados</h1>
          </div>
          <div>
            {datas ? (
              <div>
                {datas.map((index) => (
                  <div key={index._id} className={styles.hotel}>
                    <div className={styles.image}>
                      <Image
                        src={index.images[0].secure_url}
                        width={200}
                        height={200}
                        alt="Hotel"
                        priority
                      />
                    </div>
                    <div className={styles.detalles}>
                      <p>{index.namehotel}</p>
                      <p>{index.description}</p>
                      <p>Tel. {index.phone}</p>
                      <p>Precio/noche MXN ${index.price}</p>
                    </div>
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
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Page;
