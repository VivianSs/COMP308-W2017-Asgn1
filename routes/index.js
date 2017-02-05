var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
 
  res.render('content/index', { 
    title: 'Home' ,
    name:'SISI LI'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', {
    title: 'Projects'
   });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', {
    title: 'Services'
   });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact'
   });
});


module.exports = router;
