// B Double E Double R U N
alert("Dude... there's no beer in the fridge.");
var answerOne = prompt("What do you do? Type 1 to cry, Type 2 to drink the Taaka that's been on top of the fridge for months, Type 3 to go on a beer run");
if(answerOne==="1"){
   alert("Everything is dark. Nothing matters anymore. There is only soberness.");
  alert("Blame your roommate for drinking the last one and ruining your life.");
}
else if(answerOne==="2"){
   alert("It's terrible. Really terrible");
   alert("You power through it, and continue to pass out on the living room floor.");
   alert("You vow to never drink cheap vodka ever again and question your life choices.");
}
else if(answerOne==="3"){
    var beerChoice = prompt("Do you want 1). Bud-Lite, 2). Old English 3). Dank-ass local, craft beer?");
    switch(beerChoice.toLowerCase()) {
      case '1' || 'Bud-lite':
        alert("Do better, bro.")
        break;
      case '2' || "Old English":
        alert("You do you, man....");
        break;
      case '3' || 'Dank-ass local, craft beer':
        alert("Excellent choice! Enjoy your deliciousness.");
        break;
      default:
        alert("Choose 1, 2, or 3 damnit....")
        break
    }
}
else{
  confirm("I said type 1, 2, or 3!");
   alert("You suck. No beer for you.");
}
