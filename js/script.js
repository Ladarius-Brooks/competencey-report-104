console.log("Executed");

// object literal for the pet salon
const salon={
    name:"The Fashion Pet",
    phone:"972-274-3431",
    address:{
        city:"Dallas,Tx",
        av:"713 Bahama Ln",
        number:"972-274-3431"

    },
    pets:[]
}
console.log(salon);
let {name,phone,address:{city,number,av}}=salon
console.log(city);


// document.getElementById('info').innerHTML="<p>"+name+"<b>"+city+"</b> </p>";

document.getElementById("info").innerHTML=`
<p class="footer-info"> ${name} 
<br><b> ${city}, ${av} ${number} </b> 
</p>`;

// template string is above

// object constructor for the pets
class Pet{
    constructor(name,age,type,breed,gender,service,ownersName,contactPhone,covidOption){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
        this.covidOption=covidOption;
    }
}
const scooby=new Pet("Scooby",50,"Dog","Dane","Male","Full Service","Shaggy","555-555-5555","appointment");
console.log(scooby);

const scrappy = new Pet("Scrappy",30,"Dog","Dane","Male","Nails cut","Shaggy","555-555-5555","pick up");
console.log(scrappy);

// add two more objects
const tyson =new Pet("Tyson",14,"Dog","Roc","Male","Ears Trimmed","Ladarius","555-444-3322","pick up");
console.log(tyson);
const diamond = new Pet("Diamond",15,"Dog","Roc","Girl","Ears Trimmed","Daryl","444-222-5999","appointment");
console.log(diamond);
// add pets to the array

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(tyson);
salon.pets.push(diamond);

console.log(salon.pets.length); // display the number of elements in the array

// alert(salon.name);

// use the for loop to push yourself
var dogs = ["Scooby", "Scrappy", "Tyson", "Diamond"];

dogs.forEach(function(dogs) {
    // alert(dogs);
});
// log dogs on the console
for (var dog of dogs){
    console.log(dog);
};

// get the info save in vars using id
var txtname=document.getElementById("petName");
var txtage=document.getElementById("petAge");
var txttype=document.getElementById("petType");
var txtbreed=document.getElementById("petBreed");
var txtgender=document.getElementById("petGender");
var txtservice=document.getElementById("petService");
var txtowner=document.getElementById("petOwner");
var txtcontact=document.getElementById("petContact");
var txtcovidoption=document.getElementById("petCovid");
// register function
function register(){


    // create the pet object (generic)
    var thePet = new Pet(txtname.value,txtage.value,txttype.value,txtbreed.value,txtgender.value,txtservice.value,txtowner.value,txtcontact.value,txtcovidoption.value);
    console.log(thePet);


        // push the pet  into the array
    salon.pets.push(thePet);
    console.log(salon.pets);
    // clear the input
    clear();
    display();
}

function clear(){
    txtname.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtservice.value="";
    txtowner.value="";
    txtcontact.value="";
    txtcovidoption.value="";

}
// display on the console the oldest pet and the youngest pet
// add CSS to the form.
// display in HTML how many pets we have and if you add more it updates



