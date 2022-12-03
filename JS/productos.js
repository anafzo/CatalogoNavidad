import data from './articulos.json' assert { type: 'json' };

const sectionCards = document.getElementById("sectionCards");
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

const cardsCategory = data => {
    data.forEach(producto => {
        if (producto.category===localStorage.getItem("category")) {
            sectionCards.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="${producto.img}" class="card-img-top img-fluid">
                    <div class="card-body border-top">
                        <h5 class="card-title">${producto.name}</h5>
                        <p class="card-text">${producto.description}</p>
                        <p class="card-text">${producto.price}</p>
                        <a href="https://wa.me/526677916253?text=Me%20interesa%20${producto.name}%20del%20outlet%20Oriflame" class="btn btn-outline-success btn-large"><img src="/assets/whatsapp.svg"> Contáctame</a>
                    </div>
                </div>
        </div>`
        }
    })
}

function listenerNavbar() {
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', event => {
            localStorage.setItem("category", item.textContent);
            console.log(localStorage.getItem("category"));
        })
    })
}

//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    listenerNavbar();
});