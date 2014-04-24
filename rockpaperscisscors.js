<!DOCTYPE html>

<html>
<head>
<!-- Internal Javascript Function -->
<script language="javaScript">
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
var compare = function(choice1, choice2) {
  if(choice1 === choice2) {
    return "It's a tie!";
  }
 if(choice1 === "rock") {
 if(choice2 === "scissors") {
     return "rock wins";
 }
 else {
     return "paper wins";
 }
 }
 if(choice1 === "paper") {
 if(choice2 === "scissors") {
     return "paper wins";
 }
 else if(choice2 === rock) {
     return "rock wins";
 }
 }
 if(choice1 === "scissors") {
 if(choice2 === "paper") {
     return "scissors wins";
 }
 else if(choice2 === "rock") {
     return "rock wins";
 }
 }
 if(choice1 !== "rock", "paper", "scissors") {
     return "You have to enter rock, paper, or scissors.";
 };
};
compare(userChoice, computerChoice);

</script>
</head>
<body>

<h1>"Rock, Paper, Scissors"</h1>

</body>
</html>