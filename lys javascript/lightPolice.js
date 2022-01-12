function lightPolice(){
    var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/lights/1/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var data = {
        "alert": "lselect",
        "hue": 0
}

    xhr.send(JSON.stringify(data));



    var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/lights/2/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var data = {
        "alert": "lselect",
        "hue": 45000
}

    xhr.send(JSON.stringify(data));



    var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/lights/3/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var data = {
        "alert": "lselect",
        "hue": 0
}

    xhr.send(JSON.stringify(data));




    var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/lights/4/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var data = {
        "alert": "lselect",
        "hue": 45000
}

    xhr.send(JSON.stringify(data));
}