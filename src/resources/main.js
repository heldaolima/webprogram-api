var formPost = document.getElementsByClassName('formPost');

for (let i = 0; i < formPost.length; i++) {
    formPost[i].onsubmit = function(){
        var xhr = new XMLHttpRequest();
        var formData = new FormData(formPost[i]);
        xhr.open('POST', formPost[i].action);
    
        xhr.send(JSON.stringify(Object.fromEntries(formData)));
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                formPost[i].reset();
                
            }
        }
        return false;
    }
}

var url = "http://localhost:8080/clientes";
var getclbt = document.getElementById('getClientes');
getclbt.addEventListener('click', function(){
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    }).catch(function() {
        console.log("booo");
    });
});
