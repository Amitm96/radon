const express = require('express');
const bodyParser = require('body-parser');
const route = require('./router/route')
const {default : mongoose} = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect("mongodb+srv://Amitmaz96:FuYghhKoFzigilxK@cluster1.mdpsbcj.mongodb.net/AmitDb2?retryWrites=true&w=majority", {useNewUrlParser :true}).then(()=> console.log("Mongodb connected successfully"))
.catch((err) => console.log(err));

app.use('/' , route);

app.listen(process.env.PORT || 3000 , function(){
    console.log(`Express app started at port no ${process.env.PORT || 3000}`);
})