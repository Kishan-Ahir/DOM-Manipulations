/*
let filter = document.querySelector('#filter');
 filter.addEventListener('keyup',filteritem);
 function filteritem(elementvalue){
     let text = elementvalue.target.value.toLowerCase();
     let itemslist = document.getElementsByTagName('li');
     let arrayofitemlist = Array.from(itemslist);
     for(let i=0;i<arrayofitemlist.length;i++)
     {
         if(arrayofitemlist[i].firstChild.textContent.toLowerCase().indexOf(text)!=-1)
         {
             arrayofitemlist[i].style.display = 'block';
         }
         else
         {
             arrayofitemlist[i].style.display = 'none';
         }
     }
 }

 
 filter.addEventListener('keyup', filteritems);
function filteritems(e){
    let text=e.target.value.toLowerCase();
    
    let items = document.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemname = item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text) !== -1)
        {
            item.style.display = "block";
        }else
        {
            item.style.display = "none";
        }
    })
}*/