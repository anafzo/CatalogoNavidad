export const cards = data => {
    const prodCategorias = [];
    data.forEach(producto => {
        if (!prodCategorias.some(prod => prod.category === producto.category)) {
            prodCategorias.push(producto);
            sectionCards.innerHTML += `
                <div class="col">
                    <a href="../HTML/products.html">
                        <div class="card">
                            <img src="${producto.img}" class="card-img-top img-fluid">
                            <div class="card-body border-top">
                                <h5 class="card-title">${producto.category}</h5>
                            </div>
                        </div>
                    </a>
                </div>`
        }
    })
}

export function listenerCards() {
    document.querySelectorAll('.card').forEach(item => {
        item.addEventListener('click', event => {
            const category=item.children[1].children[0].textContent;
            saveLocalStorage(category);
        })
    })
}

export function listenerNavbar() {
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', event => {
            saveLocalStorage(item.textContent);
        })
    })
}

function saveLocalStorage(value){
    localStorage.setItem("category", value);
}

export const cardsCategory = data => {
    const sectionCards = document.getElementById("sectionCards");
    data.forEach(producto => {
        if (producto.category===localStorage.getItem("category")) {
            sectionCards.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="${producto.img}" class="card-img-top img-fluid">
                    <div class="card-body border-top">
                        <h5 class="card-title">${producto.name}</h5>
                        <p class="card-text">${producto.description}</p>
                        <p class="card-text">$${producto.price}</p>
                        <a href="https://wa.me/526677916253?text=Me%20interesa%20${producto.name}%20del%20outlet%20Oriflame" class="btn btn-outline-success btn-large"><img src="/assets/whatsapp.svg"> Contáctame</a>
                    </div>
                </div>
        </div>`
        }
    })
}