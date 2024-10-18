import React from 'react'
import styles from '@/styles/blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
        <h2>Latest Blogs</h2>
        <div className={styles.blogItem}>
          <Link href={'/blogpost/learn-javaScript'}>
          <h3>How to learn JavaScript in 2024?</h3></Link>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2024?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2024?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2024?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
    </main>
    </div>
  )
}

export default Blog