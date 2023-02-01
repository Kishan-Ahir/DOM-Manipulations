let form=document.querySelector('#form');
        let existingData = [];
        form.addEventListener('submit',additem)
        
        //To add delete button
        let deletbtn = document.createElement('button');
        deletbtn.id = 'delete';
        let deletetext = document.createTextNode('Delete');
        deletbtn.appendChild(deletetext);

        function additem(e){
            e.preventDefault();//if we will not add this then it will be not visible on web page.

            //To Show the data on webpage
            let newelement = document.createElement('p');
            let name=document.createTextNode(document.querySelector('#name').value);
            let email=document.createTextNode(' '+document.querySelector('#email').value);
            let phone=document.createTextNode(' '+document.querySelector('#phone').value);
            newelement.appendChild(name);
            newelement.appendChild(email);
            newelement.appendChild(phone);
            newelement.appendChild(deletbtn)
            form.appendChild(newelement);

            //To add data into local storage
            let data = {
                 name : document.querySelector('#name').value,
                email : document.querySelector('#email').value,
                phone : document.querySelector('#phone').value
            };
            localStorage.setItem(document.querySelector('#name').value,JSON.stringify(data));
        }