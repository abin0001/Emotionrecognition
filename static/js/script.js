// Function to update the displayed emotion and percentage
function updateData(emotion, percent) {
    document.getElementById("data-content").innerText = "Emotion: " + emotion;
    document.getElementById("percent-content").innerText = "Percent: " + percent + "%";

    // Define image and quote variables based on the emotion
    let imageSrc, quote;
    if (emotion === "angry") {
        imageSrc = "/static/images/angry_emoji.png";
        quote = "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.";
    } else if (emotion === "sad") {
        imageSrc = "/static/images/sad_emoji.png";
        quote = "The walls we build around us to keep out the sadness also keep out the joy.";
    } else if (emotion === "happy") {
        imageSrc = "/static/images/happy_emoji.png";
        quote = "The best way to cheer yourself up is to try to cheer somebody else up.";
    } else if (emotion === "surprise") {
        imageSrc = "/static/images/surprise_emoji.png";
        quote = "Life is full of surprises and serendipity. Being open to unexpected turns in the road is an important part of success.";
    } else if (emotion === "fear") {
        imageSrc = "/static/images/fear_emoji.png";
        quote = "The only thing we have to fear is fear itself.";
    } else if (emotion === "neutral") {
        imageSrc = "/static/imges/neutral.png";
        quote = "The quieter you become, the more you are able to hear.";
    }

    // Update the image and quote
    document.getElementById("emoji-image").src = imageSrc;
    document.getElementById("quote-content").innerText = quote;
}

// Function to fetch data from Flask server and update the page
function fetchData() {
    fetch('/get_data')  // Route to get data from Flask
        .then(response => response.json())
        .then(data => {
            const emotion = data.emotion;
            const percent = data.percent;
            updateData(emotion, percent);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call fetchData every second
setInterval(fetchData, 1000); // Fetch data every 1000 milliseconds (1 second)
