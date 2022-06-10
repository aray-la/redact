$(document).ready(function(){


	$('input[type=range]').on('input', function(){
		 inputType = $(this).attr('id');
		 inputValue = $(this).val();

		 if (inputType == 'rdct'){
		 	$('#face').css('--leet-axis', inputValue);
		 }else{
		 	$('#face').css('--mouth-axis', inputValue);
		 }

	});

	$('#play').click(function(){
		$('#face').toggleClass('animated');
	});

});

function randomLeet() {
	//console.log("hi");
	var text = document.getElementById("face").innerHTML;
	//console.log(text);
	var newText = "";
	var bracketFlag = false;
	for (let i=0; i<text.length; i++) {
		var c = text.charAt(i);
		if (c === '<') {
			bracketFlag = true;
		}
		else if (c === '>') {
			bracketFlag = false;
			newText += c;
			continue;
		}

		if (bracketFlag) {
			newText += c;
			continue;
		}

		console.log(c);
		var rand = Math.random() * 200;
		console.log(rand);
		var newC = "<span style='--leet-axis: " + rand + "; font-variation-settings: \"rdct\" var(--leet-axis);'>" + c + "</span>";
		newText+= newC;
	}
	document.getElementById("face").innerHTML = newText;
}
