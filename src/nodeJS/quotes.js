const express=require('express')
const router=express.Router()

const quotes = [
  'If you set your goals ridiculously high and it is a failure, you will fail above everyone else\'s success.',
  'Never let the fear of striking out keep you from playing the game.',
  'Your self-worth is determined by you. You don\'t have to depend on someone telling you who you are'
];
  

  
  router.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
   
    // Set cache-control headers to disable caching
  
    res.json({ quote: randomQuote });
  });

  module.exports=router;