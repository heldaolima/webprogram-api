
var tedBt = document.getElementById('showTed');
var pixBt = document.getElementById('showPix');

tedBt.addEventListener('click', insertFormDados);
pixBt.addEventListener('click', insertFormDados);

function insertFormDados() {
    if (this.id === "showTed") {
        document.querySelector("#showPix").remove();
    }
    else if (this.id === "showPix") {
        document.querySelector("#showTed").remove();
    }

    var form = document.createElement("form");
    var label = document.createElement('label');
    label.innerHTML =  "Insira o CPF do cliente";

    var cpfInput = document.createElement("input");
    cpfInput.setAttribute("type", "text");
    cpfInput.setAttribute("name", "cpf");
    cpfInput.setAttribute("placeholder", "CPF");
    
    var s = document.createElement("button");
    s.setAttribute("class", "butao");
    s.setAttribute("value", "Submit");
    s.innerHTML = "Enviar";
    
    form.append(label);
    form.append(cpfInput);
    form.append(s);

    this.parentNode.insertBefore(form, this.nextSibling);
    this.removeEventListener('click', insertFormDados);
}