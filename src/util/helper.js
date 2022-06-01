
const printDate = function(){
    date = new Date();
    console.log(date.toDateString());
}

const printMonth = function(){
    date = new Date();
    const month = date.toLocaleString('default' , {month : 'long'});
    console.log(month);
}

const getBatchInfo = function(){
    console.log("Radon week3 day3 , the topic for today is nodejs modules and basics and some git commands");
}

module.exports = {
    printDate : printDate,
    printMonth : printMonth , 
    getBatchInfo : getBatchInfo
}