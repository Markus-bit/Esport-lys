
function lightId1(){
    var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/groups/1";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    const index = lightIds.indexOf("\"1\"");
    if (index > -1) {
    lightIds.splice(index, 1);
    } else{
        lightIds.push("\"1\"")
    }
    console.log(lightIds); 

    let text = lightIds.toString();
    console.log(text);

    var dataString = "{\"lights\":[" +text+ "]}"

    console.log(dataString)

    xhr.send(dataString);

    
    }

function lightId2(){
    var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/groups/1";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    const index = lightIds.indexOf("\"2\"");
    if (index > -1) {
    lightIds.splice(index, 1);
    } else{
        lightIds.push("\"2\"")
    }
    console.log(lightIds); 

    let text = lightIds.toString();
    console.log(text);

    var dataString = "{\"lights\":[" +text+ "]}"

    console.log(dataString)

    xhr.send(dataString);

    
    }


    function lightId3(){
        var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/groups/1";
    
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", url);
    
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
        }};
    
        const index = lightIds.indexOf("\"3\"");
        if (index > -1) {
        lightIds.splice(index, 1);
        } else{
            lightIds.push("\"3\"")
        }
        console.log(lightIds); 
    
        let text = lightIds.toString();
        console.log(text);
    
        var dataString = "{\"lights\":[" +text+ "]}"
    
        console.log(dataString)
    
        xhr.send(dataString);
    
        
        }


        function lightId4(){
            var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/groups/1";
        
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", url);
        
            xhr.setRequestHeader("Content-Type", "application/json");
        
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
            }};
        
            const index = lightIds.indexOf("\"4\"");
            if (index > -1) {
            lightIds.splice(index, 1);
            } else{
                lightIds.push("\"4\"")
            }
            console.log(lightIds); 
        
            let text = lightIds.toString();
            console.log(text);
        
            var dataString = "{\"lights\":[" +text+ "]}"
        
            console.log(dataString)
        
            xhr.send(dataString);
        
            
            }


function lightIdAll(){
    var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/groups/1";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    const id1 = lightIds.indexOf("\"1\"");
    if (id1 == -1) {
        lightIds.push("\"1\"")
    }
    const id2 = lightIds.indexOf("\"2\"");
    if (id2 == -1) {
        lightIds.push("\"2\"")
    }
    const id3 = lightIds.indexOf("\"3\"");
    if (id3 == -1) {
        lightIds.push("\"3\"")
    }
    const id4 = lightIds.indexOf("\"4\"");
    if (id4 == -1) {
        lightIds.push("\"4\"")
    }
    console.log(lightIds); 

    let text = lightIds.toString();
    console.log(text);

    var dataString = "{\"lights\":[" +text+ "]}"

    console.log(dataString)

    xhr.send(dataString);
    }

function lightIdNone(){
    var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/groups/1";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var dataString = "{\"lights\":[]}"  

    console.log(dataString)
    xhr.send(dataString);
    }
