const addHouses = () =>{
    let element = document.querySelectorAll('.description');
    let houses = ["gryffindor","hufflepuff","ravenclaw","slytherin"];
    for(let i=0; i<element.length; i++){
        element[i].classList.add(houses[i])
    }
}
addHouses()
const flexIt = () =>{
    let element = document.querySelectorAll('.needFlex');
    for(let item of element){
    item.classList.toggle('flexIt');
    }
}
const emphasize = (house) =>{
    let element = document.querySelectorAll(`.${house}`);
    for(let item of element){
        item.classList.toggle('emphasis')
    }

}
const hideTheSnitch = () =>{
    let element = document.querySelector('#golden');
    element.classList.toggle('snitch')
}