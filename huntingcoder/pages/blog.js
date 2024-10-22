import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '@/styles/blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component'


//Step 1: Collect all the files from blog directory
//Step 2: Iterate through them and display them
const Blog = (props) => {
  const [first, setfirst] = useState(props.allBlogs);
  const [Count, setCount] = useState(2);
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${Count+2}`);
    setCount(Count+2);
    let data = await d.json();
    setfirst(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={first.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== first.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {first.map((blogItem) => {
          return (
            <div className={styles.blogItem} key={blogItem.slug}>
              <Link href={`blogpost/${blogItem.slug}`}>
                <h3>{blogItem.title}</h3></Link>
              <p className={styles.blogItemp}>{blogItem.metadesc.substr(0, 140)}...</p>
              <button className={styles.btn}>Read More</button>
            </div>
          )
        })}
        </InfiniteScroll>
      </main>
    </div>
  )
}

// Server side rendering
export async function getStaticProps() {
  let data = await fs.promises.readdir('blogData');
  let allCount = data.length;
  let myFile;
  let allBlogs = [];
  for (let i = 0; i < 2; i++) {
    const item = data[i];
    myFile = await fs.promises.readFile((`blogData/` + item), 'utf-8');
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: { allBlogs, allCount },
  }
}

export default Blog