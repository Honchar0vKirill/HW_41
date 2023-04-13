let order = {
    name : "TV",
    price : 3000,
    discount : 250,
    IsConfirmed : false
}
let paragraph = document.querySelector('#txt')
paragraph.innerHTML = `Name : ${order.name}, price : ${order.price}, discount : ${order.discount}`;