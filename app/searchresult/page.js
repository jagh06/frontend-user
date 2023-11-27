"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
      console.log(response.data.data);
      setDatas(response.data.data);
    } catch (error) {
      console.log("ERROR_GET_ITEMS");
    }
  };

  return (
    <Layout>
      <main className="contenedor">
        <div>
          <div>
            <p>Resultado de búsqueda</p>
            {datas ? (
              <div>
                {datas.map((index) => (
                  <div key={index._id}>
                    <Image
                      src={index.images[0].secure_url}
                      width={200}
                      height={200}
                      alt="Hotel"
                      priority
                    />
                    <p>{index.namehotel}</p>
                    <p>{index.description}</p>
                    <p>Tel. {index.phone}</p>
                    <p>Precio/noche MXN ${index.price}</p>
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
