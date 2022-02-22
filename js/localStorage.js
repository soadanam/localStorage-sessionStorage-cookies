console.log('hello from localStorage js!')

const getInput = () => {
    const productNameId = document.getElementById('productId');
    const productPriceId = document.getElementById('priceId');
    const productName = productNameId.value;
    const productPrice = productPriceId.value;
    
    productNameId.value = '';
    productPriceId.value = '';
    const ulID = document.getElementById('ulId').textContent = '';

    addLocalStorageData(productName, productPrice);
}

//as there is no existing localStorage data name & value, or we just need to create a new unique name localStorage key+value pairs, Or if there is any then we need to find it by name('cart') and get the value and convert(JSON.parse) them, as they are in JSON string in normal mode! So let's do this first!
const myLocalStorageCustomData = () => {
    const myKEY = localStorage.getItem('cart');  //V.V.I
    let cartObj;
    if(myKEY){
        cartObj = JSON.parse(myKEY);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}


const addLocalStorageData = (productName, ProductValue) =>{
    // console.log(typeof(ProductValue))
   const allPairs = myLocalStorageCustomData();
   allPairs[productName] = parseFloat(ProductValue);
   const allPairsStringified = JSON.stringify(allPairs);
   localStorage.setItem('cart', allPairsStringified);

   getItemsToShowFromLocalStorage();
};

const getItemsToShowFromLocalStorage = () =>{
    const myKEY1 = localStorage.getItem('cart');
    // console.log('myKey1', myKEY1)
    const myKey1Parsed = JSON.parse(myKEY1);
    // console.log('parsed', myKey1Parsed)

    displayProducts(myKey1Parsed);
}

const displayProducts = (object) =>{
    // console.log('object is:', object)
    const ulID = document.getElementById('ulId');
    
    for(const product in object){
        const myLi = document.createElement('li');
        myLi.innerHTML = `
        <p>${product}</p>
        <p>for price: ${object[product]}</p>
        `;
        ulID.appendChild(myLi)
    }
};





