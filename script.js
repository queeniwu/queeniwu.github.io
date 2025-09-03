document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const stepSizes = [26, 9, 13, 5, 5, 5, 4, 17]; // Define your step sizes here
    let playTimer;
    let currentStep = 0;
    const audio = document.getElementById('audio');
    audio.volume = 0.15;

    // Click to play for current step duration
    video.addEventListener('click', function() {
        // Only respond to clicks if video is paused
        if (!video.paused) return;
        
        const stepDuration = stepSizes[currentStep % stepSizes.length];
        
        // Clear any existing timer
        clearTimeout(playTimer);
        
        // Start playing
        video.play();

        // Start audio upon breakup
        if (currentStep === 1) {
            setTimeout(function() {
                audio.play();
            }, 2000);
        }
        
        // Stop after step duration
        playTimer = setTimeout(function() {
            video.pause();
        }, stepDuration * 1000);
        
        // Move to next step
        currentStep++;
    });

    // Reset function
    window.resetVideo = function() {
        clearTimeout(playTimer);
        video.pause();
        video.currentTime = 0;
        audio.pause();
        audio.currentTime = 0;
        currentStep = 0;
    }
});