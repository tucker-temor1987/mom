

function rock_paper_scissors(){
	var temor = prompt(temor,rock,paper,scissors)
	var clint = prompt(clint,rock,paper,scissors,)

	if(temor === clint){
		console.log("Its a tie");
	} else if (temor === "rock"){
		if (clint === "scissors"){
			console.log("temor wins");
		}else if ( clint === "paper"){
			console.log("clint wins");
		}
	} else if (temor === "paper"){
		if  (clint === "rock"){
			console.log("temor wins");
		}else if (clint === scissors){
			console.log("clint wins");
		}
	} else if (temor === "scissors"){
		if (clint === "paper"){
			console.log("temor wins")
		}else if (clint === "rock"){
			console.log("clint wins")
		}
	} else{
		console.log(" something broke!");
	}
}
