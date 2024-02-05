
const add = function () {
    const todoname = document.getElementById('name').value;
    const todoprice = document.getElementById('price').value;
    const tododate = document.getElementById('time').value;
    if (todoname == '' && todoprice == '') {
        alert("Can not add without item name and price");
    } else {
        addItem();
        alert("Item add successfully");
    }
}
const addItem = function () {
    const todoname = document.getElementById('name').value;
    const todoprice = document.getElementById('price').value;
    const tododate = document.getElementById('time').value;
    const newList = document.createElement('li');
    newList.setAttribute('id', todoname + todoprice);

    newList.innerHTML = `<span>${todoname}</span>
    <span>Rs.${todoprice}</span>
    <span>${tododate}</span>
    <button type="submit" class="delete" id="${todoname}"onclick="deleteItem(this.id)">Del</button>`;

    const mainList = document.getElementById('demo');
    mainList.appendChild(newList);
}

const deleteItem = function (clicked) {
    const delItem = document.getElementById(clicked);
    const parentElementID = delItem.parentNode;
    console.log(parentElementID.id)
    const parentNode = document.getElementById(`${parentElementID.id}`);
    parentNode.remove();
}
