// dates

let myDates =  new  Date()
console.log(myDates.toDateString());
console.log(typeof myDates);

let myCreateDate = new Date(2024,0,23)
console.log(myCreateDate.toDateString());

let myTimeStamp =  Date.now()

console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleDateString('dafault',{
    weekday:"long",
    // timeZone:''
})
