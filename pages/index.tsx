import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/layouts/index.module.scss';

const IndexPage = () => (
  <Layout title="Home | 99A Portfolio">
    <h1 className={styles.scss_test}>99A</h1>
    <p>
      <Link href="/about">
        <a className={styles.scss_test}>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
