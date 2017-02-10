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
   'It is my personal mission that to become a good web developer or android developer so that I can improve myself and help my family to live in a better life.',
   'I have passion for web development,and also mobile development. I really enjoy programming and finally seeing my achievements. Especially when I have spent lots of time to solve bugs and then find best solutions to deal with it.',
   'I am a self-driven person, so I can work independently and effeciently. At the same time, I am able to collaborate with others as a team member in order to build team effort. '
   ]
   let present = 'To gain more knowledge and improve technical skills is my main purpose by now. In the future, I am willing to provide my ideas, techical skills, experiences to my company in order to help the company grow the business.';
  res.render('content/about', 
  { title: 'About',
   sentences:sentences,
   present:present
  });
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
