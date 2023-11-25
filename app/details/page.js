"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../components/Layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/principal/Details.module.css";

const Page = () => {
  const router = useRouter();
  const [idGet, setIdGet] = useState("");
  const [hotelData, setHotelData] = useState("");
  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idGet = urlParams.get("id");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/hotels/getforuser/${idGet}`
        );
        setHotelData(response.data.data);
        setImagenes[response.data.data.images];
      } catch (error) {
        console.log("ERROR_GET_ITEM");
      }
    };

    setIdGet(idGet);
    fetchData();
  }, []);

  return (
    <Layout>
      <main className="contenedor">
        <div className={styles.principal}>
          {hotelData ? (
            <div className={styles.detaildata}>
              <div className={styles.imagelist}>
                {hotelData.images.map((image) => (
                  <Image
                    className={styles.imagen}
                    alt="Imagen del hotel"
                    key={image.public_id}
                    layout="responsive"
                    src={image.secure_url}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
              <div className={styles.moredetails}>
                <h2>{hotelData.namehotel}</h2>
                <p>{hotelData.description}</p>
                <p>Tel. {hotelData.phone}</p>
                <p>Precio/Noche MXN ${hotelData.price}</p>
                <p>Calle {hotelData.street}</p>
                <p>No. Calle {hotelData.streetnumber}</p>
                <p>Ciudad {hotelData.city}</p>
              </div>
              <div className={styles.divlink}>
                <div className={styles.linkto}>
                  <Link
                    href={{ pathname: `../reservar`, query: { id: hotelData._id } }}
                    className={styles.reservar}
                  >
                    Reservar
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p>No hay nada que mostrar.</p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Page;
