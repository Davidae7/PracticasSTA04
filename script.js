document.getElementById("buscar").addEventListener('click', function(){

    fetch('http://www.omdbapi.com/?apikey=8053f2df&t=pokemon')
      .then(response => response.json())
      .then(json => console.log(json));

})
