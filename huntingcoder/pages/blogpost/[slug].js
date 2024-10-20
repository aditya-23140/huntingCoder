import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
//Slug is used to create dynamic pages...
import styles from '@/styles/blogpost.module.css'

//Step 1: Find the file corresponding to the slug
//Step 2: Populate them inside the page
const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlogs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
          {blog && blog.content}
        </div>
      </main>
    </div>
  )
}

//Server side rendering

export async function getServerSideProps(context) {
  //console.log(context.query);
  //const router = useRouter();
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  let myBlogs = await data.json();
  return {
    props: { myBlogs },
  }
}

export default slug