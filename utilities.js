/*Based off the function setup I have already provided, and using function(s), create a fetch response that pulls both the 
joke and determines if it is a single or two part joke. Then based off the json response seperate the setup and delivery
of the new joke so that both parts can have their own button which will reveal that current part of said joke.
Make the delivery button invisible when the joke is only a one part joke.*/

/*Above is the used prompt with the copilot agent to help formulate this js file*/


async function fetchData(){

    try{
        const response = await fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const jokeElement = document.getElementById("newjoke");
        const revealButton = document.getElementById("revealButton");
        const deliveryElement = document.getElementById("delivery");
        
        deliveryElement.textContent = "";
        deliveryElement.hidden = true;
        revealButton.hidden = true;
        currentDelivery = "";

        if (data.type === "single"){
            jokeElement.textContent = data.joke;
        } else {
            jokeElement.textContent = data.setup;
            currentDelivery = data.delivery;
            revealButton.hidden = false;
        }
    }
    catch(error){
        console.error(error);
    }
}

function revealDelivery() {
    const deliveryElement = document.getElementById("delivery");
    deliveryElement.textContent = currentDelivery;
    deliveryElement.hidden = false;
    document.getElementById("revealButton").hidden = true;
}
