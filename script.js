function iniciar() {
    if(window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'pt-br';
        recognition.start();

        recognition.onresult = function(e) {
            console.log(e.results);
            document.getElementById('texto').value = e.results[0][0].transcript;
        }
    } else {
        alert('Navegador Incompatível!')
    }
}