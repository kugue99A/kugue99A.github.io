import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

function SeedsHeader() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <a href="#">Logo</a>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.current}><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Access</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <a href="#">Account</a>
      </header>
    </section>
  );
}

export default SeedsHeader;
