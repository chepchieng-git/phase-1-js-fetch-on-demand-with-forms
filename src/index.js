const init = () => {
  //target the DOM element we want
    const inputForm = document.querySelector('form')
    //add eventListener to the form with two arguments
    inputForm.addEventListener('submit', (event) => {

        //override form's behavior; stops page from refreshing
        event.preventDefault()
        
        //event.target.children[1].
        const input = document.querySelector('input#searchByID')

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')
            
            title.innerText = data.title
            summary.innerText = data.summary
        })

    })

}

document.addEventListener('DOMContentLoaded', init);