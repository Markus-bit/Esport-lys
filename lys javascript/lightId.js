
/**
 * It connects to the API and sends a PUT request to the API
 * @returns The xhr object.
 */
function connectAPI(){
    console.log("hei")
    var url = 'http://' + IP + '/api/' + user + '/groups/1';

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    return xhr;
}
/**
 * Send the lightIds array as a string to the server
 * @param xhr - the XMLHttpRequest object that we created earlier
 */
function sendData(xhr){
    console.log(lightIds); 

    let text = lightIds.toString();
    console.log(text);

    var dataString = "{\"lights\":[" +text+ "]}"

    console.log(dataString)

    xhr.send(dataString);
}

/**
 * Given a light ID, add it to the list of selected lights if it's not already there, otherwise remove
 * it
 * @param id - The id of the light you want to control.
 */
function lightselect(id){
    const index = lightIds.indexOf('"' + id + '"');
    if (index == -1) {
        lightIds.push('"' + id + '"');
    }
    else{
        lightIds.splice(index, 1);
    }
}

/**
 * This function is used to turn on the lights with id 3 and 4
 */
function lightId1(){
    var xhr = connectAPI()

    lightselect(1)
    lightselect(2)

    sendData(xhr)
    }

/**
 * This function is used to turn on the lights with id 3 and 4
 */
function lightId2(){
    var xhr = connectAPI()

    lightselect(3)
    lightselect(4)

    sendData(xhr)
}

/**
 * This function is used to send a request to the API to turn on the light with the id of 5
 */
function lightId3(){
    var xhr = connectAPI()

    lightselect(5)
   
    sendData(xhr)
}
/**
 * This function is used to turn on the light with id 6
 */

function lightId4(){
    var xhr = connectAPI()

   lightselect(6)

    sendData(xhr)
}

/**
 * This function is used to turn on the light with id 7
 */
function lightId5(){
    var xhr = connectAPI()

    lightselect(7)

    sendData(xhr)
} 
/**
 * This function is used to add all the light IDs to the lightIds array
 */

function lightIdAll(){
    var xhr = connectAPI()
    let id = new Array(7)
    for(i = 1; i <= 7; i++) {
        id[i-1] = lightIds.indexOf('"' + i + '"');
        if (id[i-1] == -1) {
            lightIds.push('"' + i + '"')
        }
    }
    sendData(xhr)
}

/**
 * This function is used to remove the light ID's from the array.
 */
function lightIdNone(){
    var xhr = connectAPI()
    let idNone = new Array(7)
    for(i = 1; i <= 7; i++) {
        idNone[i-1] = lightIds.indexOf('"' + i + '"');
        if (idNone[i-1] > -1) {
            lightIds.splice(idNone[i-1],1)
         }
    }
    sendData(xhr)
 }

