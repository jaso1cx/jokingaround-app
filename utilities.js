fetchData();

async function fetchData(){

    try{
        const response = await fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}
