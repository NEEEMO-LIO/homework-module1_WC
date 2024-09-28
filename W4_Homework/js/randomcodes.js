/*------RANDOM CODES------*/

//Function to generate combination of characters
function generateCode(){
    //Create var to store genrated codes and the type of character we wat to show as codes
    var code=' '; //initialize to null value
    var str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple times usng a loop
    for(i=1;i<=8;i++){
        var char=Math.random()* str.length; //random select a character frm the var and then store a new var
        code += str.charAt(char) //accumlate the generated character into a string of 8 characters
    }
    return code; //return the final accumlated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(){
    document.getElementById("submit").disabled = true;
}

//Activate function
disableButton();