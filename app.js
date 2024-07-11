const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
    // res.send('Home Page!')
    // var a = 10;
    // var b= 20;
    // var c= a+b;
    // res.send('Sum of a and b is :'+c)
  res.sendFile(__dirname + '/home.html');
})
app.get('/about', (req, res) => {
    // res.send('About Page!')
  res.sendFile(__dirname + '/about.html');

})
app.get('/contact', (req, res) => {
    // res.send('About Page!')
  res.sendFile(__dirname + '/contact.html');

})
app.get('/submit_form',(req,res) =>{
    var no1 =req.query.No1;
    var no2 =req.query.No2;
    var no3 =req.query.No3;
    var no4 =req.query.No4;
    
    
    var no = parseInt(no1) + parseInt(no2) + parseInt(no3) + parseInt(no4);
    var per = no/4;
    // res.send('Total Marks is : '+ no +' and \n'+'Percentage is : '+ per);
    //this four numbers  and marks and percentage it has to be display in table
    var table = "<table border='1'><tr><th>Subject</th><th>Marks</th></tr><tr><td>Maths</td><td>"+no1+"</td></tr><tr><td>Science</td><td>"+no2+"</td></tr><tr><td>English</td><td>"+no3+"</td></tr><tr><td>Computer</td><td>"+no4+"</td></tr><tr><td>Total</td><td>"+no+"</td></tr><tr><td>Percentage</td><td>"+per+"</td></tr></table>";
    res.send(table);    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})