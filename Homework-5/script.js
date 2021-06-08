const inputs = document.getElementsByTagName('input');

const synth = new Tone.Synth().toDestination();
const now = Tone.now();
function playMusic(song) {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    // trigger the attack immediately
    synth.triggerAttack(`${song}`, now);
    // wait one second before triggering the release
    synth.triggerRelease(now + 1);
}

for(let i=0; i<inputs.length; i++) {
    inputs[i].setAttribute('input-selected', i+1);
    inputs[i].addEventListener('click', function() {
        const valueInput = this.getAttribute('value');
        const correctElement = document.getElementById('correct-answer');
        const wrongElement1 = document.getElementById('wrong-answer-1');
        const wrongElement2 = document.getElementById('wrong-answer-2');
        if(valueInput === 'correct') {
            playMusic("C2");
            correctElement.style.color = 'green';
            wrongElement1.style.color = 'black';
            wrongElement2.style.color = 'black';
        } else if(valueInput === 'wrong-1'){
            playMusic("C3");
            wrongElement1.style.color = 'red';
            wrongElement2.style.color = 'black';
            correctElement.style.color = 'black';
        } else if(valueInput === 'wrong-2'){
            playMusic("C4");
            wrongElement2.style.color = 'red';
            wrongElement1.style.color = 'black';
            correctElement.style.color = 'black';
        }
    });
}