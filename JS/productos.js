import data from './articulos.json' assert { type: 'json' };

const sectionCards = document.getElementById("sectionCards");
const tituloProductos=document.getElementById("tituloProductos");

tituloProductos.textContent=localStorage.getItem("category");

const cardsCategory = data => {
    data.forEach(producto => {
        const {name, price, img, description, category} = producto;
        if (category===localStorage.getItem("category")) {
            sectionCards.innerHTML += `
            <div class="col">
            <a href="../HTML/productos.html" style="text-decoration: none; color:black;">
                <div class="card">
                    <img src="${img}" class="card-img-top img-fluid">
                    <div class="card-body border-top">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${description}</p>
                        <p class="card-text">$${price}.00</p>
                        <a href="https://wa.me/526677916253?text=Me%20interesa%20${name}%20del%20outlet%20Oriflame" class="btn btn-outline-success btn-large"><img src="/assets/whatsapp.svg"> Contáctame</a>
                    </div>
                </div>
            </a>
        </div>`
        }
    })
}

//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', () => {
    cardsCategory(data);
});