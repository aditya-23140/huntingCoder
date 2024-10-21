import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '@/styles/blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'


//Step 1: Collect all the files from blog directory
//Step 2: Iterate through them and display them
const Blog = (props) => {
  const [first, setfirst] = useState(props.allBlogs);


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

// Server side rendering
export async function getStaticProps() {
  let data = await fs.promises.readdir('blogData');
  let myFile;
  let allBlogs = [];
  for(let i=0; i<data.length; i++){
    myFile = await fs.promises.readFile(`blogData/` + data[i]);
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: {allBlogs},
  }
}

export default Blog