function lightCt(){
    var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/groups/1/action";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var slider = document.getElementById("ctSlider");
    var data = {"ct": parseInt(slider.value)}


    xhr.send(JSON.stringify(data));
    }
   
    
 
    


    