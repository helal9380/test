

function discountTotal(quantity) {
    const first100 = 100;
    const second100 = 50;
    const above = 40;

    if(quantity <= 100) {
        const first100Total = first100 * quantity;
        return first100Total;
    }
    else if(quantity <= 200) {
        const first100Total = 100 * first100;
        const remaingQuantity = quantity - 100;
        const remaingTotal = remaingQuantity * second100;
        const total = first100Total + remaingTotal;
        return total;
    } else {
        const first100Total = 100 * first100;
        const second100Total = 100 * second100;
        const remaingQuantity = quantity - 200;
        const remaingTotal = remaingQuantity * above;
        const total = first100Total + second100Total + remaingTotal;
        return total;
    }

}

const result = discountTotal(201);
console.log(result)
