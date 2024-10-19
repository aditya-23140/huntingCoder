import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '@/styles/blog.module.css'
import Link from 'next/link'


//Step 1: Collect all the files from blog directory
//Step 2: Iterate through them and display them
const Blog = () => {

  const [first, setfirst] = useState([]);
  useEffect(() => {
    console.log("User Effect is running");
    fetch('http://localhost:3000/api/blogs')
        .then(a => a.json())
        .then((parsed) => {
            setfirst(parsed);
        });
  }, []);


  return (
    <div className={styles.container}>
    <main className={styles.main}>
        {first.map((blogItem) => {
          return (
            <div className={styles.blogItem} key={blogItem.slug}>
            <Link href={`blogpost/${blogItem.slug}`}>
              <h3>{blogItem.title}</h3></Link>
              <p className={styles.blogItemp}>{blogItem.content.substr(0, 140)}...</p>
            </div>
          )
        })}
    </main>
    </div>
  )
}

export default Blog