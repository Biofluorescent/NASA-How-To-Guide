document.getElementById('GetAPOD').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.nasa.gov/planetary/apod?api_key=vxv1zkt6XNg2lNGq2JVhuchcWoAowyJlO5b9LtG4", true);
    
    /* Asynchronous Call */
    req.addEventListener('load', function(){
        var response = JSON.parse(req.responseText);
        document.getElementById('title').textContent = response.title;
        /* Video or Image generated */
        if(response.media_type == 'video'){
            var iframe = document.createElement('iframe');
            iframe.frameBorder = "0";
            iframe.width = "560";
            iframe.height = "315";
            iframe.setAttribute("allowfullscreen", true)
            iframe.setAttribute("src", response.url);
            document.getElementById("content").appendChild(iframe);
        }else {
            document.getElementById('url').src = response.hdurl;
            document.getElementById('url').setAttribute("width", "50%");
            document.getElementById('url').setAttribute("height", "50%");
        }

        document.getElementById('copyright').textContent = response.copyright;
        document.getElementById('info').textContent = response.explanation;
        document.getElementById('date').textContent = response.date;
    })
    
    req.send(null);
    /* Use preventDefault to stop page from refreshing */
    event.preventDefault();
})

document.getElementById('Earth').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.nasa.gov/planetary/earth/imagery?lon=-122.33&lat=47.60&date=2014-02-01&cloud_score=True&api_key=vxv1zkt6XNg2lNGq2JVhuchcWoAowyJlO5b9LtG4", true);
    
    /* Asynchronous Call */
    req.addEventListener('load', function(){
        var response = JSON.parse(req.responseText);
        document.getElementById('earthUrl').src = response.url;
        document.getElementById('cloud').textContent = response.cloud_score;
        console.log(response);
    })
    
    req.send(null);
    /* Use preventDefault to stop page from refreshing */
    event.preventDefault();
})