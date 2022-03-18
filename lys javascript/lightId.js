
function lightId1(){
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1";

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
        lightIds.push("\"1\"");
    }
    else{
        lightIds.splice(id1, 1);
    }
    const id2 = lightIds.indexOf("\"2\"");
    if (id2 == -1) {
        lightIds.push("\"2\"");
    }
    else{
        lightIds.splice(id2, 1);
    }
    console.log(lightIds); 

    let text = lightIds.toString();
    console.log(text);
    
    var dataString = "{\"lights\":[" +text+ "]}"

    console.log(dataString)

    xhr.send(dataString);

    
    }

function lightId2(){
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    const id3 = lightIds.indexOf("\"3\"");
    if (id3 == -1) {
        lightIds.push("\"3\"");
    }
    else{
        lightIds.splice(id3, 1);
    }
    const id4 = lightIds.indexOf("\"4\"");
    if (id4 == -1) {
        lightIds.push("\"4\"");
    }
    else{
        lightIds.splice(id4, 1);
    }
    console.log(lightIds); 

    let text = lightIds.toString();
    console.log(text);

    var dataString = "{\"lights\":[" +text+ "]}"

    console.log(dataString)

    xhr.send(dataString);

    
    }

    

function lightId3(){
var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1";

var xhr = new XMLHttpRequest();
xhr.open("PUT", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
}};

const index = lightIds.indexOf("\"5\"");
if (index > -1) {
lightIds.splice(index, 1);
} else{
    lightIds.push("\"5\"")
}
console.log(lightIds); 

let text = lightIds.toString();
console.log(text);

var dataString = "{\"lights\":[" +text+ "]}"

console.log(dataString)

xhr.send(dataString);


}


function lightId4(){
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    const index = lightIds.indexOf("\"6\"");
    if (index > -1) {
    lightIds.splice(index, 1);
    } else{
        lightIds.push("\"6\"")
    }
    console.log(lightIds); 

    let text = lightIds.toString();
    console.log(text);

    var dataString = "{\"lights\":[" +text+ "]}"

    console.log(dataString)

    xhr.send(dataString);

    
    }


function lightId5(){
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    const index = lightIds.indexOf("\"7\"");
    if (index > -1) {
    lightIds.splice(index, 1);
    } else{
        lightIds.push("\"7\"")
    }
    console.log(lightIds); 

    let text = lightIds.toString();
    console.log(text);

    var dataString = "{\"lights\":[" +text+ "]}"

    console.log(dataString)

    xhr.send(dataString);


}

                        



            

function lightIdAll(){
    console.log("hei")
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1";

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
    const id5 = lightIds.indexOf("\"5\"");
    if (id5 == -1) {
        lightIds.push("\"5\"")
    }
    const id6 = lightIds.indexOf("\"6\"");
    if (id6 == -1) {
        lightIds.push("\"6\"")
    }
    const id7 = lightIds.indexOf("\"7\"");
    if (id7 == -1) {
        lightIds.push("\"7\"")
    }

    console.log(lightIds); 

    let text = lightIds.toString();
    console.log(text);

    var dataString = "{\"lights\":[" +text+ "]}"

    console.log(dataString)

    xhr.send(dataString);
}

function lightIdNone(){
    console.log("hei")
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    const idNone1 = lightIds.indexOf("\"1\"");
    if (idNone1 > -1) {
        lightIds.splice(idNone1,1)
    }
    const idNone2 = lightIds.indexOf("\"2\"");
    if (idNone2 > -1) {
        lightIds.splice(idNone2, 1)
    }
    const idNone3 = lightIds.indexOf("\"3\"");
    if (idNone3 > -1) {
        lightIds.splice(idNone3, 1)
    }
    const idNone4 = lightIds.indexOf("\"4\"");
    if (idNone4 > -1) {
        lightIds.splice(idNone4, 1)
    }
    const idNone5 = lightIds.indexOf("\"5\"");
    if (idNone5 > -1) {
        lightIds.splice(idNone5, 1)
    }
    const idNone6 = lightIds.indexOf("\"6\"");
    if (idNone6 > -1) {
        lightIds.splice(idNone6, 1)
    }
    const idNone7 = lightIds.indexOf("\"7\"");
    if (idNone7 > -1) {
        lightIds.splice(idNone7, 1)
    }


    console.log(lightIds); 

    let none = lightIds.toString();
    console.log(none);

    var dataString = "{\"lights\":[" +none+ "]}"

    console.log(dataString)

    xhr.send(dataString);
 }