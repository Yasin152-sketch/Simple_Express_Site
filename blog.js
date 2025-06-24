// const express = require("express");
// const path = require("path");
// const blogs = require("../data/blogs");

// const router = express.Router();

// router.get("/", (req, res) => {
//   // res.sendFile(path.join(__dirname,'../templates/index.html'))
//   res.render("home");
// });
// router.get("/blog", (req, res) => {
//   // res.sendFile(path.join(__dirname,'../templates/index.html'))
//   res.render("blogHome", {
//     blogs: blogs,
//   });
// });

// router.get('/user/:name',(req,res) => {
//   res.send(`hello${req.params.name}`)
// })

// router.get("/blogs", (req, res) => {
//   // blogs.forEach(e => {
//   //      console.log(e.title)
//   // })
//   res.sendFile(path.join(__dirname, "../templates/blogHome.html"));
// });

// router.get("/blogpost/:slag", (req, res) => {
//   const myblog = blogs.filter((e) => {
//     return e.slag == req.params.slag;
//   });
//   console.log(myblog);
//   res.render("blogPage", {
//     title: myblog[0].title,
//     content: myblog[0].content,
//   });
//   // console.log(myblog)
//   // res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
// });

// module.exports = router;


// The example for app express here//


const express =  require('express')
const path = require('path')
const blogs = require('../data/blogs.js')

const router = express.Router()


router.get('/',(req,res) =>{
  res.render('home')
})


// ...existing code...
router.get('/blog', (req, res) => {
  res.render("blogPage", {
    blogs: blogs
  })
  console.log(blogs)
})
// ...existing code...

router.get('/blogpost/:slug', (req, res) => {
  const myblog = blogs.find((e) => e.slug === req.params.slug)
  if (!myblog) {
    return res.status(404).send('Blog not found')
  }
  res.render('blogPage', {
    title: myblog.title,
    content: myblog.content
  })
  console.log(myblog)
})


router.get('/user/:name',(req,res) => {
  res.send(`Hello ${req.params.name} how was go your day! `)
})









module.exports = router