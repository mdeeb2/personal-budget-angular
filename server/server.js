const express = require('express');

const app = express();
const cors = require('cors');
const port = 3000;

app.use('/' , express.static('public'));
//below is my json file being required
app.use(cors());
const budget = require('./dee.json')



// I commented out the original budget data to see if json is working
/*{
  myBudget:  [
{
title: 'Eat out',
budget: 30

},
{
    title: 'Rent',
    budget: 350
    
    },
    {
        title: 'Groceries',
        budget: 90
        
        },
        {
            title: 'Gas',
            budget: 45
            
            },
    {
         title: 'Insurance',
         budget: 25
                
     },
    {
        title: 'Health Care',
        budget: 70
                    
    },
    {
        title: 'Electricity',
        budget: 40
                        
     },
     {
        title: 'Water utilities',
        budget: 25
        
    },
  
    
]};*/








app.get('/hello', (req,res) =>{

    res.send('Hello World!');

});

app.get('/Budget', (req,res) => {
  res.json(budget);
     
});

app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
});