import { cardsCategory, listenerNavbar } from "./functions.js";

const tituloProductos=document.getElementById("tituloProductos");
tituloProductos.textContent=localStorage.getItem("category");

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