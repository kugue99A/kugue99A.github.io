import Image from 'next/image'

import styles from './page.module.css'
import Flex from '@/components/Flex/Flex'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Flex direction="column">
          <h1 className="">99A</h1>
        </Flex>
      </div>
    </main>
  )
}
