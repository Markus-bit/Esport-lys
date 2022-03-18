/**
 * It takes the slider value and sends it to the Hue Bridge
 */
function lightSat(){
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1/action";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var slider = document.getElementById("satSlider");
    var data = {"sat": parseInt(slider.value)}


    xhr.send(JSON.stringify(data));
    }
   
    
 
    


    