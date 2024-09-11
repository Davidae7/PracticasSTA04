document.getElementById("boton").addEventListener('click', function(){
    let nombre = document.getElementById('nombre').value;
    
    fetch('http://www.omdbapi.com/?apikey=8053f2df&t=' + encodeURIComponent(nombre))
        .then(response => response.json())
        .then(json => {
            console.log(json);
            alert(`Director: ${json.Director}, Año: ${json.Year}`);
        })
});
