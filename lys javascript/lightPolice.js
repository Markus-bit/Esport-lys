/* This function is used to change the light color to red. */
function lightPolice(){
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/lights/1/state";

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

    /* This is sending the data to the server. */
    xhr.send(JSON.stringify(data));



    /* This is the url for the light. */
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/lights/2/state";

    /* This is sending the data to the server. */
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

    /* This is sending the data to the server. */
    xhr.send(JSON.stringify(data));


/* This is the url for the light. */
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/lights/3/state";

    /* This is creating a new XMLHttpRequest object. */
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

   /* This is sending the data to the server. */
    xhr.send(JSON.stringify(data));




   /* This is the url for the light. */
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/lights/4/state";

    /* This is creating a new XMLHttpRequest object. */
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    /* This is setting the header of the request to be JSON. */
    xhr.setRequestHeader("Content-Type", "application/json");

    /* This is a function that is called when the request is complete. */
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

 
    var data = {
        "alert": "lselect",
        "hue": 45000
}

   /* This is sending the data to the server. */
    xhr.send(JSON.stringify(data));




    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/lights/5/state";

    /* This is creating a new XMLHttpRequest object. */
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
/* This is setting the header of the request to be JSON. */

    xhr.setRequestHeader("Content-Type", "application/json");

    /* This is a function that is called when the request is complete. */
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var data = {
        "alert": "lselect",
        "hue": 0
}

    /* This is sending the data to the server. */
    xhr.send(JSON.stringify(data));

/* This is creating a variable called url that is storing the url of the light. */

    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/lights/6/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
/* This is creating a new XMLHttpRequest object. */
/* This is setting the header of the request to be JSON. */

    xhr.setRequestHeader("Content-Type", "application/json");

    /* This is a function that is called when the request is complete. */
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var data = {
        "alert": "lselect",
        "hue": 45000
}

   /* This is sending the data to the server. */
    xhr.send(JSON.stringify(data));


}