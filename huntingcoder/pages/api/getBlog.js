// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getBlog?slug=how-to-learn-javaScript

import * as fs from 'fs';

export default function handler(req, res) {

  //fs.readFile('blogData/how-to-learn-javaScript.json', 'utf8', (err, data) =>  {}) to read file
  //fs.readdir('blogData', (err, files) => {}) to read directory
  fs.readFile(`blogData/${req.query.slug}.json`, 'utf8', (err, data) =>  {
    if(err){
      res.status(404).json({message: 'Blog not found'});
      return;
    }
    console.log(req.query);
    res.status(200).json(JSON.parse(data));
  })
}
