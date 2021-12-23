import SeedsHeader from "../components/SeedsHeader"
import styles from "./index.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {/* <Header /> */} 
      <SeedsHeader /> 
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default MainLayout
