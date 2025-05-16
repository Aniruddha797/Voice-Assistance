speech = window.webkitSpeechRecognition;
recognition = new speech();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
isSpeaking = false;

Textbox = document.getElementById('Textarea');

function start() {
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);

    var Content = event.results[event.results.length-1][0].transcript.trim();

    Textbox.innerHTML = Content;
    console.log(Content);

 
    if (Content == 'hello' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("Hello, how can I help you?")
    }

   
    
    else if (Content == 'what is your name' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("I am a voice chatbot created to assist you.")
    }

    else if (Content == 'what is your purpose' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("My purpose is to assist you with your queries and provide information.")
    }
    
    else if (Content == 'thank you' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("You're welcome! If you have any more questions, feel free to ask.")
    }

    else if (Content  == 'what is the time' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;

        var time = new Date().toLocaleTimeString(); // current time er jonno

        speak("The current time is " + time)
    }
    
    
   


    else if (Content == 'what is the date' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        var date = new Date().toLocaleDateString(); // current date er jonno
        
        speak("Today's date is " + date)
    }

    else if (Content == 'stop' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("Goodbye! Have a great day!")
    }

    else if (Content == 'open Google' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("Opening Google .");
        window.open("https://www.google.com", "_blank"); // Google open korar jonno
    }


    else if (Content == 'open YouTube' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("Opening YouTube .");
        window.open("https://www.youtube.com", "_blank"); // YouTube open korar jonno
    }

    else if (Content == 'open Facebook' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("Opening Facebook .");
        window.open("https://www.facebook.com", "_blank"); // Facebook open korar jonno
    }

    else if (Content == 'open Instagram' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("Opening Instagram .");
        window.open("https://www.instagram.com", "_blank"); // Twitter open korar jonno
    }


    else if (Content == 'open anime' && isSpeaking == false) {
        recognition.stop();
        isSpeaking = true;
        speak("Opening Anime .");
        window.open("https://aniwatchtv.to/home", "_blank"); // Anime open korar jonno


  

}

}







// Show AI reply in a separate box
const replyBox = document.getElementById('ReplyBox');

function showReply(text) {
    if (replyBox) {
        replyBox.innerHTML = text;
    }
}


function showReplyTyping(text, speed = 40) {
    if (!replyBox) return;
    replyBox.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            replyBox.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}






// Update speak function to use typing effect
function speak(Content) {
    var easy = window.speechSynthesis;
    var speakText = new SpeechSynthesisUtterance(Content);

    showReplyTyping(Content);

    speakText.onend = function(){
        console.log("Speech ended");
        isSpeaking = false;
        recognition.start();
    }

    easy.speak(speakText);
}