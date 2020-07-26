//Create a Function for Random Number//
function randomNumber(num){
    var random = Math.random(num)*10000;
    var randomNumber = Math.round(random);
    if (randomNumber<1000){
        null;  
    }
    else{
    console.log(randomNumber);
    document.getElementById("generate-number-form").value=randomNumber;
}
} 

//JS Code for Dial-Pad//
var number = document.getElementsByClassName("button");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click',function(){
var inputNumber=this.id;
document.getElementById("number-pad-form").value = document.getElementById("number-pad-form").value + inputNumber;
});
}

//Create a Function for delete Button//
function clearNumber(){
document.getElementById("number-pad-form").value =document.getElementById("number-pad-form").value.slice(0,-1) ;
}

//Create a Function for Clear Button//
 function clearAll(){
document.getElementById("number-pad-form").value =null;
}

//Create a Function for Submit Button//
function submit(){
  if(document.getElementById("generate-number-form").value==document.getElementById("number-pad-form").value){
    console.log("yesss");
    document.getElementById("matched").style.display="block";
    document.getElementById("not-matched").style.display="none";
  }
  else{
    console.log("nooooo");
    document.getElementById("not-matched").style.display="block";
    document.getElementById("matched").style.display="none";
  }
}