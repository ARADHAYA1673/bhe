var SpeechRecognitition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognitition();


function Start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transscript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
}