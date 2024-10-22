/*------RANDOM CODES------*/
var code = '';
//Function to generate combination of characters
function generateCode(){
    code=''; //initialize to null value
    //Create var to store genrated codes and the type of character we wat to show as codes
    var str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple times usng a loop
    for(i=1;i<=8;i++){
        var char=Math.floor(Math.random()* str.length); //random select a character frm the var and then store a new var
        code += str.charAt(char); //accumlate the generated character into a string of 8 characters
    }
    return code; //return the final accumlated string when loop ends
}

//var getCode =''; //to store entered code
//var btnvalue; //for button boolean value

//Get HTML element to display
generateCode();
document.getElementById("codes").innerHTML = code;

//Determine when to able or disable Button
function disableButton(btnvalue){
    var subbtn = document.getElementById("submit");
    subbtn.disabled = btnvalue; //able/disable button
    if(btnvalue){ //test if button is disabled or enabled
        document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,0.3)";
        document.getElementById("submit").style.color= "rgba(255,255,255,0.5)";
    }else{
        //set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,1)";
        document.getElementById("submit").style.color = "rgba(255,255,255,1)";  
    }
}

//listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode); //listen to code entered in textbox

//run function if detected user had entered a character in textbox
function evaluateCode(){
    var getCode = document.getElementById("codeentered").value; //get character entered
    var charset1 = getCode.trim(); //remove any hidden characters entered
    var charset2 = code.trim(); //remove any hidden characters generated
    //test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 === charset2){
        disableButton(false); 
    }else{
        disableButton(true);
    }
}

//Activate function
disableButton(true);