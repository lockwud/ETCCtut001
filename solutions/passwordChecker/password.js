const prompt = require("prompt-sync")()

const correctpassword=("farmland")

for(let attempt=1;attempt<=3;attempt++){
let userinput=prompt("enter your password:");
if(userinput===correctpassword){
    console.log("access granted");
    break;
    
}else if(userinput===""){
    console.log("NO INPUT TRY AGAIN")

}else{
   console.log ("wrong password")
   
    
}
if(attempt===3){
    console.log("too many attempt. access denied")
}
}
