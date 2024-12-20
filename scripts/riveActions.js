import { hp, isPleased } from "./riveController.js"
import { socket } from "./socket/socketController.js";

let scratchButton = document.getElementById('scratchButton')

const scratch = () => {
    isPleased.fire();

socket.emit('scratch', {scratch:"being scratched"});


    // hp.value = hp.value + 10


    // if (hp.value < 90) {
    //     hp.value = hp.value + 10
    // } else {
    //     hp.value = 100;
    //   }
    };

    scratchButton.addEventListener("click", () => {
        scratch();
})