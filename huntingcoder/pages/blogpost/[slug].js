import React from 'react'
import { useRouter } from 'next/router'
//Slug is used to create dynamic pages...


const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>{slug}</div>
  )
}

export default slug