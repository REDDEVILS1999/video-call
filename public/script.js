// Get the video element from the DOM
const myVideo = document.getElementById('webcam');

// Function to start the webcam feed
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: true,
            audio: false
        });
        myVideo.srcObject = stream;
        console.log("good");
    } catch (error) {
        console.error('Error accessing webcam:', error);
    }
}

// Start the webcam when the page loads
window.addEventListener('load', startWebcam);
