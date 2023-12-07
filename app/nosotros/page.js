"use client";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/principal/Nosotros.module.css";
import Image from "next/image";

// tapsin pastilla 

const Nosotros = () => {
  return (  
    <Layout>
      <main className="contenedor">
        <div className={styles.divinicial}>
          <div className={styles.divnosotros}>
            <div className={styles.aplicacion}>
              <h1 style={{ color: "black" }}>Acerca de Turingo Space</h1>

              <div className={styles.divaplicacion}>
                <p style={{ color: "black" }}>
                  Bienvenido/a a Turingo Space, tu destino preferido para
                  descubrir hospedajes excepcionales y realizar reservas
                  inolvidables. Nos enorgullece ofrecer una plataforma intuitiva
                  y completa que conecta a viajeros con una amplia variedad de
                  opciones de hospedaje, garantizando experiencias inolvidables
                  en cada viaje.
                </p>
              </div>

              <div className={styles.divaplicacion}>
                <h3 style={{ color: "black" }}>Nuestra Misión</h3>
                <p style={{ color: "black" }}>
                  En Turingo Space, nos esforzamos por facilitar a los viajeros
                  la búsqueda y reserva de hospedajes que se adapten a sus
                  necesidades y preferencias únicas.
                </p>
              </div>

              <div className={styles.divaplicacion}>
                <h3 style={{ color: "black" }}>Características destacadas</h3>
                <h4 style={{ color: "black" }}>
                  Explora Diversidad de Hospedajes
                </h4>
                <p style={{ color: "black" }}>
                  Descubre una amplia gama de opciones de hospedaje comodidades,
                  para encontrar el lugar perfecto que se adapte a tu estilo de
                  viaje.
                </p>
                <h4 style={{ color: "black" }}>Reservas Sencillas y Seguras</h4>
                <p style={{ color: "black" }}>
                  Hacer una reserva en Turingo Space es fácil y seguro. Nuestra
                  interfaz intuitiva te permite comparar tarifas, leer reseñas
                  auténticas y confirmar tu reserva con total confianza.
                </p>
              </div>

              <div className={styles.divaplicacion}>
                <h3 style={{ color: "black" }}>¿Cómo funciona?</h3>
                <h4 style={{ color: "black" }}>Explora y filtra</h4>
                <p style={{ color: "black" }}>
                  Utiliza nuestras herramientas de búsqueda avanzada para
                  explorar una variedad de hospedajes.
                </p>
                <h4 style={{ color: "black" }}>Reserva con Confianza</h4>
                <p style={{ color: "black" }}>
                  Después de encontrar tu hospedaje ideal, reserva con confianza
                  a través de nuestra plataforma segura. Recibirás
                  confirmaciones instantáneas y detalles completos de tu
                  reserva.
                </p>
              </div>
            </div>
            <div className={styles.empresa}>
              <h2 className={styles.aboutUs}>Acerca de Nosotros</h2>
              <div className={styles.divempresa}>
                <h3 className={styles.aboutUs}>¿Quienes somos?</h3>
                <p className={styles.aboutUs}>
                  Somos una empresa dedicada al desarrollo de software. Turingo
                  Space es un software de Solving Needs.
                </p>
                <p className={styles.aboutUs}>
                  Nuestra empresa esta ubicada en la ciudad de Ocosingo,
                  Chiapas.
                </p>
              </div>

              <div className={styles.divempresa}>
                <h3 className={styles.aboutUs}>Desarrolladores</h3>
                <p>Nuestro equipo de desarrollo</p>
                <div className={styles.desarrolladores}>
                  <div className={styles.grid}>
                    <div className={styles.image}>
                      <Image
                        className={styles.iamgedev}
                        width={250}
                        height={350}
                        src="/images/nelson.jpeg"
                        alt="Image Nelson"
                      />
                      <p className={styles.names}>Nelson Mayo Méndez. Desarrollador FrontEnd</p>
                    </div>
                  </div>

                  <div className={styles.grid}>
                    <div className={styles.image}>
                      <Image
                        className={styles.iamgedev}
                        width={250}
                        height={350}
                        src="/images/juan.jpeg"
                        alt="Image Juan"
                      />
                      <p className={styles.names}>
                        Juan Antonio Guzmán Hernández. Desarrollador BackEnd
                      </p>
                    </div>
                  </div>

                  <div className={styles.grid}>
                    <div className={styles.image}>
                      <Image
                        className={styles.iamgedev}
                        width={250}
                        height={300}
                        src="/images/victor.png"
                        alt="Image Victo"
                      />
                      <p className={styles.names}>
                        Víctor Manuel Goznález López. Desarrollador FrontEnd
                      </p>
                    </div>
                  </div>

                  <div className={styles.grid}>
                    <div className={styles.image}>
                      <Image
                        className={styles.iamgedev}
                        width={250}
                        height={300}
                        src="/images/lemuel.jpeg"
                        alt="Image Lemuel"
                      />
                      <p className={styles.names}>Lemuel Aguilar Cruz. Desarrollador FrontEnd</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
