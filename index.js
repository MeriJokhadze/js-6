'use strict'

function getUserInfo(){
    let request = new XMLHttpRequest();
    request.open('GET', "https://reqres.in/api/unknown");

    request.addEventListener('load', function(){
        let informationText = this.responseText;
        let informationJson = JSON.parse(informationText);

        console.log(informationJson);
        let ul = document.createElement('ul');
        informationJson.data.forEach(element => {
            let li = document.createElement('li');
            li.innerText = `${element.name} ${element.color}`;
            ul.appendChild(li);

            let container = document.querySelector('.container');
            container.appendChild(ul);
        });
    })
    request.send();
}

getUserInfo();