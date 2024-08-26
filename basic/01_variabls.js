const accountId =123
let accountEmail = "sumit@gmail.com"
var accountPassword ="12345"
accountCity = "delhi"
let accountState;


// not allowed
// accountId = 2

accountEmail = "sk@.com"
accountPassword = "123"
accountCity = "noida"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
not use var issue with block scope and functional scope
*/