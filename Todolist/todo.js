var ul = document.getElementById("list-container")
var input = document.getElementById("input")


function add(){
    var listitem = document.createElement("li")
    listitem.setAttribute("id","listitem")
    listitem.innerHTML = input.value + "<button onclick='del(event)'>Delete</button>"
    ul.append(listitem)

}

function del(event){
    event.target.parentElement.remove()

}
