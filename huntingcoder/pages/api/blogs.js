// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {

  let data = await fs.promises.readdir('blogData');
  let myFile;
  let allBlogs = [];
  for(let i=0; i<data.length; i++){
    myFile = await fs.promises.readFile(`blogData/` + data[i]);
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);
    
  // fs.promises.readdir(`blogData`, (err, data) =>  {
  //   console.log(data);
  //   let allBlogs = [];
  //   data.forEach(element => {
  //     console.log(element);
  //     fs.readFileSync(`blogData/${element}`, 'utf8', (err, data) =>  {
  //       allBlogs.push(data);
  //     });
  //   });
  //   res.status(200).json(allBlogs);
  // })
}
