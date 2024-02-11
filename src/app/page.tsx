import Image from 'next/image'

import styles from './page.module.css'
import Flex from '@/components/Flex/Flex'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Flex direction="column">
          <h1 className="pa-4 underline">test test</h1>
          <h1>test test</h1>
          <h1>test test</h1>
          <h1>test test</h1>
          <h1>test test</h1>
        </Flex>
        <h3 className="text-3xl font-bold underline">aAAAA</h3>
      </div>
    </main>
  )
}
