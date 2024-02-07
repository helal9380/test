const phones = [
    {name: 'samsung', price: 20000, color: 'black'},
    {name: 'Xoime', price: 18000, color: 'white'},
    {name: 'welton', price: 10000, color: 'orange'},
    {name: 'oppo', price: 23000, color: 'red'},
    {name: 'HTC', price: 30000, color: 'blue'}
]

function maxPhone(phones) {
    let max = phones[0];
    for(const phone of phones) {
        phone.price > max.price;
        max = phone;
    }
    return max
}
const max = maxPhone(phones)
console.log(max)