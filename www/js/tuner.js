var audio;
			
function play(){
	audio.play();
}

function stop(){
	var sounds = document.getElementsByTagName('audio');
	for(i=0; i<sounds.length; i++) { 
		sounds[i].pause(); 
		sounds[i].currentTime = 0;
	}
}

function playChord(value, chordId){
	selectAudio(chordId);
	stop();
	play();
	$(".app-name").hide();
	$(".chord-show").hide();
	$(".chord-show").fadeIn();
	$('.chord-show').html(value);
}

function selectAudio(chordId){
	if(chordId == 'chord-e-acute'){
		audio = document.getElementById('audio1');
	} else if(chordId == 'chord-b'){
		audio = document.getElementById('audio2');
	} else if(chordId == 'chord-g'){
		audio = document.getElementById('audio3');
	} else if(chordId == 'chord-d'){
		audio = document.getElementById('audio4');
	} else if(chordId == 'chord-a'){
		audio = document.getElementById('audio5');
	} else if(chordId == 'chord-e-bold'){
		audio = document.getElementById('audio6');
	}
}

$(document).ready(function() {
	$("button").click(function(){
		playChord(this.innerText, this.id);
    });
});