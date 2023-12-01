"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/principal/Header.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    router.push(`/searchresult?query=${searchQuery}`);
  };
 

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.barraandiconuser}>
          <div className={styles.barra}>
            <Link href="/" className={styles.iconapp}>
              <Image
                width={250}
                height={40}
                src="/images/logologo.png"
                alt="Image logo"
              />
            </Link>
            <nav className={styles.navegacion}>
              <Link href="/">Home</Link>
            </nav>
          </div>

          <div className={styles.iniciarsesion}>
            <div className={styles.divdivbuscador}>
              <div className={styles.divbuscador}>
                <form onSubmit={handleSearch}>
                  <input
                    className={styles.inputbuscador}
                    type="number"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar por precio"
                  />
                </form>
              </div>
            </div>

            <div className={styles.linkiniciarsesion}>
              <div>
                <Link href="../veriry">Cuenta</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
