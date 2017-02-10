let express = require('express');
let router = express.Router();
let sentences;
/* GET home page. */
router.get('/', (req, res, next)=> {
 
  res.render('content/index', { 
    title: 'Home' ,
    name:'SISI LI'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  sentences = ['Hi, My name is Sisi Li.',
   'I come from China and I am living in Canada for 3 years. I am currently studying software engineering technology at Centennial College.',
   ];
  res.render('content/about', 
  { title: 'About',
   sentences:sentences,
  });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  sentences = ['This is a sample of the projects that I have worked on in the last semester. ',
  'Most of this are android applications by using android studio and JavaEE websites which were developed based on MVC pattern.'];
  res.render('content/projects', {
    title: 'Projects',
    sentences:sentences
   });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  sentences = ['Since I have been studying software engineering for 3 years, I can offer seversl services.',
  'The following are services that I can offer to you'];
  res.render('content/services', {
    title: 'Services',
    sentences:sentences
   });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  sentences = ['If you have any concern or question, please feel free to contact me',
  'sli167@my.centennialcollege.ca',
  '416-833-2598'];
  res.render('content/contact', {
    title: 'Contact',
    sentences:sentences
   });
});


module.exports = router;
