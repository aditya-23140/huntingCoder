import React from 'react'
import { useRouter } from 'next/router'
//Slug is used to create dynamic pages...
import styles from '@/styles/blogpost.module.css'


const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde illo iste debitis nam quidem illum ea cum adipisci, quaerat sapiente minus voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, animi deserunt illum, quae similique, cupiditate saepe itaque aut dolor labore nemo possimus distinctio ullam temporibus inventore eos eligendi modi fugit! Eum, delectus sapiente aliquid unde numquam error alias dolore corporis. Rerum ducimus quidem sit cum!
        </div>
      </main>
    </div>
  )
}

export default slug