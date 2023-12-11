
document.getElementById("quoteTitle").innerHTML = "Quote of the Day"; 

document.getElementById("quotePress").innerHTML = "Press the button below to recieve a random quote!"; 

document.getElementById("button").innerHTML = "New Quote"; 






var quoteText = [ 

  " “ A friend is someone who knows all about you and still loves you.” " , 
  " “ Live as if you were to die tomorrow. Learn as if you were to live forever.” " ,
  " “ You miss 100% of the shots you don't take.” " ,
  " “ If you tell the truth, you don't have to remember anything.” " ,
  " “ Do not take life too seriously. You will not get out alive.” "
  ] ;


var authorName = [
  
  " “ Elbert Hubbard ” " ,
  " “ Mahatma Gandhi” " , 
  " “ Wayne Gretzy” " , 
  " “ Mark Twain” " ,
  " “ Elbert Hubbard ” "
 ] ;













function getYourQuote()
{



  var randomNumber = Math.floor ( Math.random ()  * authorName.length ) ;

  document.getElementById ("quoteText").innerHTML = quoteText[randomNumber]; 

  document.getElementById ("authorName").innerHTML = authorName[randomNumber]; 




} 

