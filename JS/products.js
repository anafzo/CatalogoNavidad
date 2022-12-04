import { cardsCategory, listenerNavbar } from "./functions.js";

const productsTitle=document.getElementById("productsTitle");
productsTitle.textContent=localStorage.getItem("category");

const fetchData = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/anafzo/db-prueba/main/articulos.json');
        const data = await res.json();
        cardsCategory(data);
    } catch (error) {
        console.log(error);
    }
}

//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    listenerNavbar();
});