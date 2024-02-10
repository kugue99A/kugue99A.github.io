import Image from 'next/image'

import styles from './page.module.css'
import Flex from '@/components/Flex/Flex'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Flex direction="column" mx="4">
          <h1>test test</h1>
          <h1>test test</h1>
          <h1>test test</h1>
          <h1>test test</h1>
          <h1>test test</h1>
        </Flex>
      </div>
    </main>
  )
}
