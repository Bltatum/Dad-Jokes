import { useDadJokes } from "./jokesDataProvider.js";
import { jokesHTML } from "./jokes.js";


const contentTarget = document.querySelector(".jokes__container")

export const jokeList = () => {
    
    const jokesObjectArray = useDadJokes()

    for (const jokeObject of jokesObjectArray) {

        const jokeHTMLrep = jokesHTML(jokeObject)
       
       contentTarget.innerHTML += jokeHTMLrep
   
    }
}