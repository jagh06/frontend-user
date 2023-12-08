"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/principal/Header.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    router.push(`/searchresult?query=${searchQuery}`);
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.barraandiconuser}>
        <div className={styles.barra}>
          <Link href="/" className={styles.iconapp}>
            <Image
              className={styles.imageicon}
              width={150}
              height={30}
              src="/images/logologo.png"
              alt="Image logo"
            />
          </Link>
          <div className={styles.textMenu}>
            <Link className={styles.linklink} href="../">
              Inicio
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.divmenu}>
        <div className={styles.navbar}>
          <div className={`${styles.menu} ${isDropdownOpen && styles.open}`}>
            <button onClick={toggleDropdown}>
              <MdOutlineMenu size={20} />
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <div>
                  <Link className={styles.linklink} href="../">
                    Inicio
                  </Link>
                </div>

                <div>
                  <Link className={styles.linklink} href="../veriry">
                    Cuenta
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
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

      <header className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.iniciarsesion}>
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

          <div className={styles.textMenu}>
            <Link className={styles.linklink} href="../veriry">
              Cuenta
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

//
// <header className={styles.header}>
//   <div>
//     <div className={styles.barraandiconuser}>
//       <div className={styles.barra}>
//         <Link href="/" className={styles.iconapp}>
//           <Image
//             width={250}
//             height={40}
//             src="/images/logologo.png"
//             alt="Image logo"
//           />
//         </Link>
//         <nav className={styles.navegacion}>
//           <Link href="/">Home</Link>
//         </nav>
//       </div>

//       <div className={styles.iniciarsesion}>
//         <div className={styles.divdivbuscador}>
//           <div className={styles.divbuscador}>
//             <form onSubmit={handleSearch}>
//               <input
//                 className={styles.inputbuscador}
//                 type="number"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Buscar por precio"
//               />
//             </form>
//           </div>
//         </div>

//         <div className={styles.linkiniciarsesion}>
//           <div>
//             <Link href="../veriry">Cuenta</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>
