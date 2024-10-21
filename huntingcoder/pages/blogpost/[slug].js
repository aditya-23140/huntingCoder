"use client"
import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
//Slug is used to create dynamic pages...
import styles from '@/styles/blogpost.module.css'
import * as fs from 'fs'

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

export async function getStaticPaths() {
  return {
    paths: [
      {params: {slug: 'how-to-learn-react'}},
      {params: {slug: 'how-to-learn-nextjs'}},
      {params: {slug: 'how-to-learn-javaScript'}},
    ],
    fallback: true,
  }
}
//Server side rendering
export async function getStaticProps(context) {
  //console.log(context.query);
  //const router = useRouter();
  const { slug } = context.params;
  let myBlogs = await fs.promises.readFile(`blogData/${slug}.json`, 'utf8');
  return {
    props: { myBlogs: JSON.parse(myBlogs) },
  }
}

export default slug