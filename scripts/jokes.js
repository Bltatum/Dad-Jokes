export const jokesHTML = (jokeObject) =>{
    return `
<section>
   <div class="card">
    <div>
           <p><h2>${jokeObject.id}</h2></p>
           <p class="question">Question:</p>
          
           <p>${jokeObject.question}</p>

           <button id="button--${jokeObject.id}">Answer</button>

        <dialog class="dialog--answer" id="details--${jokeObject.id}">
           <p>Answer:</p>
           <p>${jokeObject.answer}</p>
           <button class="button--close">Close Dialog</button>
          </dialog> 
       </div> 
</div> 
</section> `
}