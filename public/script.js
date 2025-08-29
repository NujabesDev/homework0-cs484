document.addEventListener('click', function(e) {
    const audio = new Audio('yippee.mp3');
    audio.play();

    // Real confetti
    confetti({
        particleCount: 200,
        spread: 150,
        origin: {      
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight 
        }
    });
});
