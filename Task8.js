/*
let form = document.querySelector('#addform');
let itemlist=document.querySelector('#items');
itemlist.addEventListener('click',removeelement);
function removeelement(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure???'))
        {
            let li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
form.addEventListener('submit',additem);
 function additem(val){
    val.preventDefault();

    let item = document.querySelector("#submition").value;
    
    //create one element
    let li=document.createElement('li');
    li.className = 'list-group-item';
    let text=document.createTextNode(item);
    li.appendChild(text);
    items.appendChild(li);

    let deletebtn = document.createElement('button');
    deletebtn.className = "btn btn-danger btn-sm float-right delete";
    let deltext = document.createTextNode('X');
    deletebtn.appendChild(deltext);
    li.appendChild(deletebtn)
 }*/