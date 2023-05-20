// You can code JavaScript here

function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "This is the shoreline at Shanghai, China. This is HTML 5.";
    speechSynthesis.speak(voice);
}