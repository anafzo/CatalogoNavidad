import { cards, listenerCards, listenerNavbar } from "./functions.js";

const fetchData = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/anafzo/db-prueba/main/articulos.json');
        const data = await res.json();
        cards(data);
        listenerCards();
    } catch (error) {
        console.log(error);
    }
}

//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    listenerNavbar();
});