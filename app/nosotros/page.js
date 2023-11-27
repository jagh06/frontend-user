"use client";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/principal/Nosotros.module.css";
import Image from "next/image";

const Nosotros = () => {
  return (
    <Layout>
      <main className="contenedor">
        <div className={styles.divinicial}>
          <div className={styles.divnosotros}>
            <div className={styles.aplicacion}>
              <h1>Acerca de Turingo Space</h1>

              <div className={styles.divaplicacion}>
                <p>
                  Bienvenido/a a Turingo Space, tu destino preferido para
                  descubrir hospedajes excepcionales y realizar reservas
                  inolvidables. Nos enorgullece ofrecer una plataforma intuitiva
                  y completa que conecta a viajeros con una amplia variedad de
                  opciones de hospedaje, garantizando experiencias inolvidables
                  en cada viaje.
                </p>
              </div>

              <div className={styles.divaplicacion}>
                <h3>Nuestra Misión</h3>
                <p>
                  En Turingo Space, nos esforzamos por facilitar a los viajeros
                  la búsqueda y reserva de hospedajes que se adapten a sus
                  necesidades y preferencias únicas.
                </p>
              </div>

              <div className={styles.divaplicacion}>
                <h3>Características destacadas</h3>
                <h4>Explora Diversidad de Hospedajes</h4>
                <p>
                  Descubre una amplia gama de opciones de hospedaje comodidades,
                  para encontrar el lugar perfecto que se adapte a tu estilo de
                  viaje.
                </p>
                <h4>Reservas Sencillas y Seguras</h4>
                <p>
                  Hacer una reserva en Turingo Space es fácil y seguro. Nuestra
                  interfaz intuitiva te permite comparar tarifas, leer reseñas
                  auténticas y confirmar tu reserva con total confianza.
                </p>
              </div>

              <div className={styles.divaplicacion}>
                <h3>¿Cómo funciona?</h3>
                <h4>Explora y filtra</h4>
                <p>
                  Utiliza nuestras herramientas de búsqueda avanzada para
                  explorar una variedad de hospedajes.
                </p>
                <h4>Reserva con Confianza</h4>
                <p>
                  Después de encontrar tu hospedaje ideal, reserva con confianza
                  a través de nuestra plataforma segura. Recibirás
                  confirmaciones instantáneas y detalles completos de tu
                  reserva.
                </p>
              </div>
            </div>
            <div className={styles.empresa}>
              <h1>Acerca de Nosotros</h1>
              <div className={styles.divempresa}>
                <h3>¿Quienes somos?</h3>
                <p>
                  Somos una empresa dedicada al desarrollo de software. Turingo
                  Space es un software de Solving Needs.
                </p>
                <p>
                  Nuestra empresa esta ubicada en la ciudad de Ocosingo,
                  Chiapas.
                </p>
              </div>
              <div className={styles.divempresa}>
                <h3>Desarrolladores</h3>
                <p>Nuestro equipo de desarrollo</p>
                <div className={styles.desarrolladores}>
                  <div className={styles.image}>
                    <Image
                      className={styles.iamgedev}
                      width={250}
                      height={350}
                      src="/images/nelson.jpeg"
                      alt="Image Nelson"
                    />
                    <p>Nelson Mayo Méndez. Desarrollador FrontEnd</p>
                  </div>
                  <div className={styles.image}>
                    <Image
                      className={styles.iamgedev}
                      width={250}
                      height={350}
                      src="/images/juan.jpeg"
                      alt="Image Juan"
                    />
                    <p>Juan Antonio Guzmán Hernández. Desarrollador BackEnd</p>
                  </div>
                  <div className={styles.image}>
                    <Image
                      className={styles.iamgedev}
                      width={250}
                      height={300}
                      src="/images/nelson.jpeg"
                      alt="Image Victo"
                    />
                    <p>Víctor Manuel Goznález López. Desarrollador FrontEnd</p>
                  </div>
                  <div className={styles.image}>
                    <Image
                      className={styles.iamgedev}
                      width={250}
                      height={300}
                      src="/images/lemuel.jpeg"
                      alt="Image Lemuel"
                    />
                    <p>Lemuel Aguilar Cruz. Desarrollador FrontEnd</p>
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
