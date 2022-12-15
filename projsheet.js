/*quiz code by Peter Burke*/
function validate(){
	//var msge2 = "all questions not listed incorrect, ";
	var msge2 = "The questions you got right were, ";
											// here is the correct answer
	if(document.getElementById("q1").value == "Hypertext markup language"){
		msge2 += "question 1 correct, ";
	}else if(document.getElementById("q1").value == "hypertext markup language"){
		msge2 += "question 1 correct, ";
	}
	//else{ 
		//msge2 += "question 1 incorrect, ";
	//}
	if(document.getElementById("q2").value == "/"){
		msge2 += "question 2 correct, ";
		//here we create a secondary correct answer
	}
	if(document.getElementById("q3").value == "<!DOCTYPE html>"){
		msge2 += "question 3 correct, ";
	}else if(document.getElementById("q3").value == "DOCTYPE html"){
		msge2 += "question 3 correct, ";
	}
	if(document.getElementById("q4").value == "<head>"){
		msge2 += "question 4 correct, ";
	}else if(document.getElementById("q4").value == "head"){
		msge2 += "question 4 correct, ";
	}
	if(document.getElementById("q5").value == "src"){
		msge2 += "question 5 correct, ";
	}else if(document.getElementById("q5").value == "SRC"){
		msge2 += "question 5 correct, ";
	}
	if(document.getElementById("q6").value == "Cascading style sheet"){
		msge2 += "question 6 correct, ";
	}else if(document.getElementById("q6").value == "cascading style sheet"){
		msge2 += "question 6 correct, ";
	}
	if(document.getElementById("q7").value == "-"){
		msge2 += "question 7 correct, ";
	}else if(document.getElementById("q7").value == "-"){
		msge2 += "question 7 correct, ";
	}
	if(document.getElementById("q8").value == "h1"){
		msge2 += "question 8 correct, ";
	}else if(document.getElementById("q8").value == "first option"){
		msge2 += "question 8 correct, ";
	}
	if(document.getElementById("q9").value == "Sticky"){
		msge2 += "question 9 correct, ";
	}else if(document.getElementById("q9").value == "sticky"){
		msge2 += "question 9 correct, ";
	}
	if(document.getElementById("q10").value == "Constellation"){
		msge2 += "question 9 correct, ";
	}else if(document.getElementById("q10").value == "constellation"){
		msge2 += "question 10 correct, ";
	}
	
	
	
	msge2 += "questions not listed you got incorrect";
		document.getElementById("text").innerHTML = msge2;
	
	return valid;

}
function support(){
			var items= ["Try your best","You're doing great","You know lots of code","You're good at this","Mistakes make you stronger","There's nothing you can't do", "All your base are belong to us"];
			// one of these is not like the others but it won't show up due to the orange number below
			document.getElementById("demo").
			innerHTML = items[Math.floor(Math.random() * 6)];
			}
