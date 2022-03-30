/**
 * It sends a PUT request to the URL, which is the Hue Bridge. The request is sent in JSON format.
 * @param effect - The type of effect to be applied to the light.
 */
function lightLoop(){
    var url = 'http://' + IP + '/api/' + user + '/groups/1';

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};
    
 
     var data = "{\"effect\":\"colorloop\"}"
    
    console.log(data)
    xhr.send(JSON.stringify(data));
    
    }


    