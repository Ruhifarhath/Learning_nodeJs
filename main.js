var prompt= require('prompt-sync')()
const guest_list=["Noor", "Rehana", "Razi", "Ruhi", "ghouse"]

var guest_name= prompt("please enter your name: ")
var isMatch=false
for(var i=0;i<guest_list.length;i++){
    if(guest_name==guest_list[i]){
        console.log("You are welcome to the party!")
        isMatch=true
        break
    }
}
if(!isMatch)console.log("Sorry you are not invited.")
