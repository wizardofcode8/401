gsap.to("#cloud", {
    x: -200,
    duration: 10,
    yoyo: true,
    repeat: -1
});

gsap.from("#moon", {
    opacity: 0,
    duration: 2.1,
    y: -50,
});

gsap.to("#cloud", {
    y: 10,
});

gsap.to("#cloud2", {
    y: 50,
});

gsap.to("#cloud2", {
    x: -200,
    duration: 10,
    yoyo: true,
    repeat: -1
});

gsap.from("#hand", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 5,
    onComplete: function () {
        // Start the "to" animation for the hand when the "from" animation is complete
        gsap.to("#hand", {
            y: -10,
            duration: 3,
            yoyo: true,
            repeat: -1
        });
    }
});

gsap.from("#haha", {
    y: -20,
    duration:3,
    opacity: 0,
    delay: 3.3,
    yoyo: true,
    repeat: -1
});

gsap.from("#txt", {
    opacity: 0,
    scale: 0.5,
    duration: 2,
});

gsap.timeline({
    repeat: -1,
}).from("#grass2", {
    opacity: 0,
    y: 100,
}).from("#grass", {
    opacity: 0,
    delay: 2,
    y: 100
}).to("#grass", {
    x: -10,
    duration: 3,
    delay: 0.5,
    yoyo: true,
    repeat: -1
});

gsap.from("#handgrass", {
    opacity: 0,
    y: -10,
    duration: 1,
    delay: 3,
});

gsap.to("#handgrass", {
    y: -5,
    duration: 3,
    yoyo: true,
    repeat: -1
});
