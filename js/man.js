const newProduct =[
    {
        img:"../img/man/man1.webp",
        title:"blue shirt",
        price:"40$",
        disPrice:"25$",
    },
    {
        img:"../img/man/man2.webp",
        title:"black shirt",
        price:"40$",
        disPrice:"30$",
    },
    {
        img:"../img/man/man3.jpg",
        title:"new hoodie",
        price:"40$",
        disPrice:"35$",
    },
    {
        img:"../img/man/man4.jpg",
        title:"new hoodie",
        price:"40$",
        disPrice:"35$",
    }
    
]

const product = [
    {
        img:"../img/man/man1.webp",
        title:"blue shirt",
        price:"40$",
        disPrice:"25$",
    },
    {
        img:"../img/man/man5.webp",
        title:"hoodie",
        price:"40$",
        disPrice:"25$",
    },
    {
        img:"../img/man/man6.png",
        title:"hoodie",
        price:"40$",
        disPrice:"25$",
    },
    {
        img:"../img/man/man2.webp",
        title:"shirt",
        price:"40$",
        disPrice:"25$",
    },
    {
        img:"../img/man/man3.jpg",
        title:"hoodie",
        price:"40$",
        disPrice:"25$",
    }
 
]

function myFunction(p){
    p = JSON.parse(decodeURIComponent(p))
    
    let modalContent = `         
        <div class="modal-header border-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col modal-card">
                        <img class="card-detail-img w-100 " src="${p.img}" alt="" >
                    </div>
                    <div class="col d-flex flex-column ms-4">
                        <h5>Lite Motion A-10</h5>
                        <p class="my-3"><del>$34.99</del> <span class="fw-bold h3">$30.00</span></p>
                        <div class="review text-start my-3">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span><br>
                        </div>
                        <button type="button" class="btn btn-outline-primary">Add To Cart</button>
                    </div>

                </div>
            </div>
        </div>`
    $('.modal-content').html(modalContent)
    let myModal = new bootstrap.Modal(document.getElementById('card-detail-modal'))
    myModal.show()
}


var newcard = document.getElementById("new-man-card")
var card = document.getElementById("card")
var newCard = newProduct.map((p)=> {
    let productObj = encodeURIComponent(JSON.stringify(p))    
    return `
    <div class="col-xl-3 col-md-4 col-6" id="card" onclick="myFunction('${productObj}')" id="myBtn">
        <div class="card">
            <img src="${p.img}" class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-text">${p.title}</p>
                <p class="card-text"><del>${p.price}</del> ${p.disPrice}</p>
                <div class="review">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span><br>
                    <button type="button" class="btn btn-outline-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
      `;
  }).join('');
  
  newcard.innerHTML=newCard;

  var Card = product.map((p)=> {
    let productObj = encodeURIComponent(JSON.stringify(p))   
    return `
    <div class="col-xl-3 col-md-4 col-6" id="card" onclick="myFunction('${productObj}')" id="myBtn">
        <div class="card">
            <img src="${p.img}" class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-text">Lite Motion A-10</p>
                <p class="card-text"><del>$34.99</del> $30.00</p>
                <div class="review">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span><br>
                    <button type="button" class="btn btn-outline-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
      `;
  }).join('');
  
  card.innerHTML=Card;