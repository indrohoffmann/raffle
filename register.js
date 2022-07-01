//Atributes
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#registerBtn");


//async holds page usable same time when reguest is still in process..?Et kui saata reguest ja aeglase neti tõttu vastust ei tule siis saab lehte edasi kasutada.
registerBtn.addEventListener("click", async function(e) {
    // siia tuleb stuff mis juhtub peale register nupu vajutust 
    e.preventDefault();//Preventing page refresh after regiter button pressed
    
    //Andmed mida tahan päringuga kaasa saata
    const data = { email: email.value,password: password.value };
    console.log(data);

//aadress (http://localhost:3000/users) tuleb vahetada siis kui lehte live panna //see on nyyd see koht kuhu teen päringu, et siis users tabelisse
    const response = await fetch("http://localhost:3000/users",{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //cors on sellepuhl et kui backend ja front toimetavad eri aadressidel siis chrome ytleb näiteks, et antud asi on ebaturvaline ja ei toimi.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header Sellest nyyd ei saanud kyll päris aru, see läheb sinna yles const data alla
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    
  );
