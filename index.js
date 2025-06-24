// const express = require('express');
// const exphbs = require('express-handlebars');


// const path = require('path');
// const app = express();
// const port = 3000;

// // const hbs = exphbs.create({
// //     extname: '.handlebars',     // Optional: file extension
// //     defaultLayout: false        // Optional: disable layout if not using
// // });



// const hbs = exphbs.create({
//     extname: '.handlebars',                       
//     defaultLayout: 'main',
//     layoutsDir: path.join(__dirname, 'views/layouts')  // or wherever your layout file is
// });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname,"static")))
// app.use('/', require(path.join(__dirname,'routes/blog.js')))
 


// app.listen(port, () => {
//   console.log(`Blog app listening on port at http://localhost:${port}`)
// })



// That is expample for express.js//


const express = require('express')
const path = require('path')
const port = 3000;
const app = express()
const exphbs = require('express-handlebars')

const hbs = exphbs.create({
  extname : '.handlebars',
  defaultLayout : 'main',
  layoutsDir : path.join(__dirname,'views/layouts')
}); 

app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars')

app.use(express.static(path.join(__dirname, 'static')))
app.use('/',require(path.join(__dirname,"routes/blog.js")))


app.listen(port, () => {
   console.log(`The app express running on at here! http://localhost:${port}`)
})