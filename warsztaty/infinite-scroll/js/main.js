//zmienne :
//  1. wysokosc okna (window)
//  2. wysokosc dokumentu (document.documentElement)
//  3. odleglosc przescrolowanych pikseli
//
//logika:
//  1. jezeli wysokosc okna + odleglosc === wysokosc dokumentu {zawolaj funkcje ajax()}
//
//funkcja ajax():
//  1. pobierz liste uzytkownikow (nie uzytkownika)
//  2. petla, zeby przejsc po uzytkownikach (for/foreach)
//  3. wyciagamy pola z kazdego uzytkownika
//  4. tworzymy nowe elementy - przypisujemy im wartosci spod kluczy
//  5. doklejamy elementy do strony


window.addEventListener('scroll', function() {
    //zmienne
    let scrolled = window.scrollY; //albo window.pageOffset
//    console.log(window.scrollY);
    let windowHeight = window.innerHeight;
//    console.log(window.innerHeight);
    let documentHeight = document.documentElement.offsetHeight;
    
    if(windowHeight + scrolled === documentHeight) {
        console.log('123');
        ajax('GET', 'https://jsonplaceholder.typicode.com/users');
        
    }
    
})


    
function ajax(method, url) {
    let httpReq = new XMLHttpRequest();
    httpReq.open(method, url);
    httpReq.onreadystatechange = function() {
        if(httpReq.readyState == 4) {
            if(httpReq.status == 200) {
                let returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
                
            }
        }
    }
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
        console.log(jsonObj);
        

        jsonObj.forEach(function(element, index) {
            let paragraf1 = document.createElement('p');
            let paragraf2 = document.createElement('p');
            let paragraf3 = document.createElement('p');
        
            paragraf1.innerHTML = element.id;
            paragraf2.innerHTML = element.name;
            paragraf3.innerHTML = element.website;
            
            document.body.appendChild(paragraf1);
            document.body.appendChild(paragraf2);
            document.body.appendChild(paragraf3);
            
        });
        
    }
    httpReq.send();
}


//ajax('GET', 'https://jsonplaceholder.typicode.com/users');

