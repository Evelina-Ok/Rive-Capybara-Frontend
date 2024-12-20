let isEating;
let isSad;
let hp;
let initial_hp = 100;
let isPleased;

const riveInstance = new rive.Rive({
    src: "../assets/capybara.riv",
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    //controller, health - are state names from Rive document
    stateMachines: ['controller', 'health'],
    onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();

        //get controller inputs
        let controller_inputs = riveInstance.stateMachineInputs('controller')
        console.log("Controller", controller_inputs);
        isPleased = controller_inputs.find((item) => item.name === 'scratch')
        // isEating = controller_inputs.find((item) => item.name === 'isEating')
        // isSad = controller_inputs.find((item) => item.name === 'isSad')

        //health input
        let health_inputs = riveInstance.stateMachineInputs("health");
        hp = health_inputs.find((item) = item.name === "hp");

        // hp.value = initial_hp;

        // setInterval(() => {
        //     if (hp.value < 90) {
        //         isSad.value = true;
        //     } else {
        //         isSad.value = false;
        //     }
        //     hp.value = hp.value -1
        // }, 2000)
    },
});

export { isPleased, hp };