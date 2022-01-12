
const popButton = document.querySelector("button");
let peopleArray = [];

function clickButton (){
    console.log("Button Clicked!");
    axios.get('https://swapi.dev/api/planets/?search=alderaan') 
        .then((res) => {
            peopleArray = res.data.results[0].residents;
            console.log(peopleArray);
            for(let i = 0; i < peopleArray.length; i++){
                axios.get(peopleArray[i])
                .then((res) => {
                    console.log(res.data.name);
                    let newName = document.createElement("h2");
                    newName.textContent = res.data.name;
                    console.log(newName);
                    document.body.appendChild(newName);
            })
            .catch((error) => {
                console.log("You messed up");
            })
        }  
})
}

popButton.addEventListener("click", clickButton);