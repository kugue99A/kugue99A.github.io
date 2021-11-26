import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

function SeedsHeader() {
  return (
    <section>
      <header className={styles.header-container}>
        <a href="#">Logo</a>
        <a href="#">Account</a>
      </header>
    </section>
  );
}

export default SeedsHeader;
