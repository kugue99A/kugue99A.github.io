import Link from 'next/link';
import MainLayout from '../layouts';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <MainLayout>
      <div className={ styles.container }>
        <h1>99A.</h1>
      </div>
    </MainLayout>
  );
}
