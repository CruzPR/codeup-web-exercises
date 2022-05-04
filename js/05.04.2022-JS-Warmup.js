
"use strict";


// Consider an array of product objects:

    const products = [
        {
            name: 'Hammer',
            priceInCents: 4500,
            isInStock: true
        },
        {
            name: 'Computer',
            priceInCents: 45000,
            isInStock: true
        },
        {
            name: 'Water Bottle',
            priceInCents: 3300,
            isInStock: true
        },
        {
            name: 'Car',
            priceInCents: 990000,
            isInStock: true
        },
        {
            name: 'Cup',
            priceInCents: 230,
            isInStock: false
        },
        {
            name: 'Book',
            priceInCents: 540,
            isInStock: false
        },
    ];

// Create the following functions that take in an array of product objects and return various values:
//
// returnMostExpensiveProductObjectInStock(products)

    function mostExpensiveProductInStock(products) {
        var mostExpensive = 0;
        products.forEach((product) => {
            if(mostExpensive < product) {
            mostExpensive = product;
        }
        });
    }






// returnLeastExpensiveProductObjectInStock(products)
// returnAveragePriceOfAllProductsInStock(products)
// returnProductObjectsNotInStock(products)