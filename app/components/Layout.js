"use client"
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/principal/Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout