let objectdata;
const getSpanAdd = (card, data) =>{
    const spanAdd = document.createElement("span");
    spanAdd.className = "food__card__add";
    card.appendChild(spanAdd);
}
// // to execute the program
const collection = fetch("assets/datas/collection.json")
    .then (response => response.json())
    .then(data =>{
            generateCard(data);
            objectdata=data;
        }
    )

// fuction for cart.
let cart = [];
if (cart.length == 0)
    {
        document.querySelector(".cart").style.display = "none";
    }    

async function filterCard(key, filterCat=['pizzas', 'pasta', 'starter', 'drinks', 'desserts'], filterBase=['tomato', 'white', 'soft', 'beer']){
    await collection;
    const food = document.querySelector('.food');
    while(food.firstChild){
        food.removeChild(food.lastChild);
    }
    if(key === "all"){
        generateCard(objectdata);
    }else{
        const rebuildobj = {}
        rebuildobj[key] = objectdata[key];
        generateCard(rebuildobj);
    }
}

//add event listener to the menu
li = document.querySelector(".header__nav__list").querySelectorAll("li");
for(e of li){
    let key = e.classList.value;
    e.addEventListener('click', event=>{
        filterCard(key);
    })
}

function generateCard(data){
    const keys = Object.keys(data);
        for (const key of keys) {

            // Got those element outside of if because they were repetitive
            const divWrapper = document.createElement("div");
            const title  = document.createElement("h1");
            document.querySelector(".food").appendChild(divWrapper);
            divWrapper.appendChild(title);
            title.className="food__title"
            title.appendChild(document.createTextNode(key));

            if (key == "drinks"){

                divWrapper.className = key+" food--wrapper";
                data[key].map (el =>{

                    const divCard = document.createElement("div");
                    divCard.className= "food__card";
                    divWrapper.appendChild(divCard);
                    const divInfo = document.createElement("div");
                    divInfo.className = "info";
                    divCard.appendChild(divInfo);
                    const divContainer = document.createElement("div");
                    divContainer.className = "food__card__container__image";
                    divCard.appendChild(divContainer);

                    const nameDrink = document.createElement("h2");
                    nameDrink.className = "info__name";
                    nameDrink.appendChild(document.createTextNode(el.nom));
                    divInfo.appendChild(nameDrink);

                    const priceDrink = document.createElement("p");
                    priceDrink.className = "info__price"
                    priceDrink.appendChild(document.createTextNode("€ "+el.prix));
                    divInfo.appendChild(priceDrink);

                    const quantDrink = document.createElement("p");
                    quantDrink.className = "info__quantity";
                    quantDrink.appendChild(document.createTextNode(el.quantity));
                    divInfo.appendChild(quantDrink);

                    const typeDrink = document.createElement("p");
                    typeDrink.appendChild(document.createTextNode(el.type));
                    divInfo.appendChild(typeDrink);

                    getSpanAdd(divCard);
                    
                })
            }else if(key == "desserts"){

                divWrapper.className = key + " food--wrapper"

                data[key].map (el =>{
                    
                    const divCard = document.createElement("div");
                    divCard.className = "food__card";
                    divWrapper.appendChild(divCard);
                    const divInfo = document.createElement("div");
                    divInfo.className = "info";
                    const divContainer = document.createElement("div");
                    divContainer.className = "food__card__container";
                    divCard.appendChild(divContainer);
                    divCard.appendChild(divInfo);
                
                    const desTitle = document.createElement("h2");
                    desTitle.className = "info__name";
                    desTitle.appendChild(document.createTextNode(el.nom));
                    divInfo.appendChild(desTitle);

                    const desImage = document.createElement("img");
                    desImage.className = "food__card__container__image";
                    divContainer.appendChild(desImage);      
                    desImage.src = "assets/datas/Images/"+el.images;
                    

                    const desPrice = document.createElement("p");
                    desPrice.className = "info__price";
                    desPrice.appendChild(document.createTextNode("€ "+el.prix));
                    divInfo.appendChild(desPrice)
                
                    getSpanAdd(divCard);
                

                })
            }
            
            else{
                divWrapper.className = key;  
                divWrapper.classList.add("food--wrapper")
                
                data[key].map(el =>{

                    const divCard = document.createElement("div");
                    divWrapper.appendChild(divCard);

                    divCard.className = "food__card";

                    const divInfo = document.createElement("div");
                    divInfo.className = "info";
                    const divContainer = document.createElement("div");
                    divContainer.className = "food__card__container";
                    divCard.appendChild(divContainer);
                    divCard.appendChild(divInfo); //modif

                    const imageFood = document.createElement("img");
                    imageFood.className = "food__card__container__image"
                    imageFood.src = "assets/datas/Images/"+el.images;
                    divContainer.appendChild(imageFood);
                    const title = document.createElement("h2");
                    title.className = "info__name";
                    divInfo.appendChild(title);
                    title.appendChild(document.createTextNode(el.nom));

                    const base = document.createElement("p");
                    base.className = "info__base";
                    base.appendChild(document.createTextNode(el.base));

                    const ingredient = document.createElement("p");
                    ingredient.className = "info__ingredient";
                    divInfo.appendChild(ingredient);

                    el.ingredients.map(ing =>{
                        ingredient.appendChild(document.createTextNode(ing+" "));
                    }).join("")
                    
                   const toPay = document.createElement("p");
                   toPay.className = "info__price";
                   toPay.appendChild(document.createTextNode("€ "+el.prix));
                   divInfo.appendChild(toPay);

                    getSpanAdd(divCard);
                })
            }
    }
}