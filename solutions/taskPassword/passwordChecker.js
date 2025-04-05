const prompt=require("prompt-sync")()
const correctpassword="etccJsTutorials"
for(var check=1; check<=3; check++){ 
  let input = prompt("Enter password")
  if(input===correctpassword){
    console.log ("Access granted")
     break;

  }else if(input ===""){
    console.log ("Try again")
  } else {
    console.log ("Wrong password")
  }
  if (check===3){
    console.log ("Too many attempt. Access denied")
  }

}

  
