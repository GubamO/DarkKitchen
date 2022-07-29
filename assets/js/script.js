// function fetchCollection() {
//     const response =fetch('assets/datas/collection.json');
//     const data = response.json(); 


//     return data;
// }
// const collection =fetchCollection();
// console.log(collection);

// tried to take datas for the Json file



    //take a parameter (an element, exemple: div)

    // doesn't return anything but create new elements for the card,
    //here for the texte divion of a card.
// const getInfoCard = (division) =>{
//     const nameInfo = document.createElement("h2");

//     const ingredientInfo = document.createElement("p");
//     const priceInfo = document.createElement("p");

//     const addInfo = document.createElement("span");

// // create 2 list to append element to the parameter and add class names.
//     const liste = [nameInfo, ingredientInfo, priceInfo, addInfo];
//     const listeClass =["info__name","info__ingredient","info__price","info__add"];
//     for (let i =0; i < liste.length; i++) {
//         liste[i].className = listeClass[i];
//         division.appendChild(liste[i]);

//     }
    

//}
 







//tried something here


const getSpanAdd = (card) =>{
    const spanAdd = document.createElement("span");
    spanAdd.className = "food__card__add";
    card.appendChild(spanAdd);
}



// // to execute the program

const collection = fetch("assets/datas/collection.json")
    .then (response => response.json())
    .then(data =>{
        const keys = Object.keys(data);
        for (const key of keys) {

            

            
            if (key == "drinks"){

                const divDrink =document.createElement("div");
                divDrink.className = "drinks";
                document.querySelector("main").appendChild(divDrink);
                    const drinkTile  = document.createElement("h1");
                    divDrink.appendChild(drinkTile);
                    drinkTile.appendChild(document.createTextNode("Drinks"));
                data[key].map (el =>{

                    const divCard = document.createElement("div");
                    divCard.className= "food__card";
                   
                    divDrink.appendChild(divCard);
                  
                    


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

                    //added span
                    // const spanAdd = document.createElement("span");
                    // spanAdd.className = "food__card__add";
                    // divCard.appendChild(spanAdd);
                    getSpanAdd(divCard);
                    
                })
            }else if(key == "desserts"){
                const divDesserts = document.createElement("div");
                divDesserts.className = "desserts"
                const dessertsTitle = document.createElement("h1");
                document.querySelector("main").appendChild(divDesserts);
                divDesserts.appendChild(dessertsTitle);
                dessertsTitle.appendChild(document.createTextNode("Desserts"));




                data[key].map (el =>{
                    
                    const divCard = document.createElement("div");
                    divCard.className = "food__card";
                    divDesserts.appendChild(divCard);
                    
                    


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
                
                
                    //added span

                // const spanAdd = document.createElement("span");
                // spanAdd.className = "food__card__add";
                // divCard.appendChild(spanAdd);
                getSpanAdd(divCard);
                

                })
            }
            
            
            
            
            
            else{
                const main =document.querySelector("main");
                const div = document.createElement("div");
                const divTitle = document.createElement("h1");
                

                if (key == "pizzas"){
                    div.className = key;  
                    div.appendChild(document.createTextNode(key));                  

                }
                else if (key == "pasta"){
                    div.className = key;
                    div.appendChild(document.createTextNode(key));                  

                }else{
                    div.className = key;
                    div.appendChild(document.createTextNode(key));                  

                }
                main.appendChild(div);
                
                data[key].map(el =>{

                   
                    const divCard = document.createElement("div");
                    div.appendChild(divCard);

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

                    //added span

                //    const spanAdd = document.createElement("span");
                //    spanAdd.className = "food__card__add";
                //    divCard.appendChild(spanAdd);
                    getSpanAdd(divCard);



                })
            }

        
}})



// fuction for cart.
let cart = [];
console.log (cart.length);

    if (cart.length == 0)
        {
            document.querySelector(".cart").style.display = "none";
        }    




