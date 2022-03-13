var form = document.getElementById('formCliente');
form.onsubmit = function(){
    var xhr = new XMLHttpRequest();
    var formData = new FormData(form);
    xhr.open('POST', form.action);

    xhr.send(JSON.stringify(Object.fromEntries(formData)));

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            form.reset();
        }
    }
    return false;
}



// function ajusteFloat(id) {
//     var meuFloat = document.getElementById(id);
//     console.log(meuFloat.value);
//     // meuFloat.value = parseFloat(meuFloat);
// }

/*

const formCliente = document.querySelector("#formCliente");

formCliente.addEventListener('submit', async function(e) {
    e.preventDefault(); //nao enviar o form antes dele ser tratado
    const form = e.currentTarget;

    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({url, formData});
        console.log({responseData});
    } catch(error) {
        console.log(error);
    }

});

async function postFormDataAsJson({url, formData}) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
    return response.json();
}
*/

