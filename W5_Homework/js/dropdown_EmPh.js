/*------Dropdown Em/Ph------*/
var contactMethod = document.getElementById('contactMethod');
var emailDiv = document.getElementById('enterEm');
var phoneDiv = document.getElementById('enterPh');



function ConMethod(){
    var selectedValue = contactMethod.value;
    if (selectedValue === '1') {
        emailDiv.style.display = 'block';  
        phoneDiv.style.display = 'none';   
    } else if (selectedValue === '2') {
        phoneDiv.style.display = 'block';  
        emailDiv.style.display = 'none';   
    } else {
        emailDiv.style.display = 'none';   
        phoneDiv.style.display = 'none';   
    }
};
contactMethod.addEventListener('change',ConMethod);

ConMethod();