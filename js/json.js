
// javascript objects 
const user = { id: 11, name: 'shidul islam', job: 'actor' };
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
    name: 'alia store',
    address: 'jhulon pol',
    propits: 150000,
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
};
const shopStringify = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringify);
console.log(JSON.parse(shopStringify));