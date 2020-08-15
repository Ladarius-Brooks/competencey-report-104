// correct user and pass values
var user="Ladarius";
var pass="2312";

// get the info from inputs and save them in variables

var passtxt=document.getElementById("userPass");
var usertxt=document.getElementById("userName");


function login(){
    console.log("Clicked");
    console.log(passtxt.value);
    console.log(usertxt.value);

    // compare the values from the inputs with the correct ones
    if(usertxt.value===user && passtxt.value===pass){
        console.log('Welcome to the system');
        document.getElementById('main').style.display="none";
        document.getElementById('msg').innerHTML= `<h2>Welcome to the system</h2>`;
    }else{
        console.error("Enter a correct user name");
        document.getElementById('msg').innerHTML= `<h4>Incorrect user name of password. </h4>`;
    }
    clear();


}
// clear the form (inputs)
function clear(){
    passtxt.value="";
    usertxt.value="";
}

// == compare the value
// === compare the value and data type






// display welcome to the system on the console
// display if the information isnt correct