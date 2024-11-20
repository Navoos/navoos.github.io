const animated = document.querySelector(".orb");
const animation = animated.getAnimations()[1];
animation.finished.then(() => console.log("finished"));