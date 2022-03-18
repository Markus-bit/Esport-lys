/**
 * It makes a PUT request to the URL, and sends a JSON object with the alert property set to "lselect"
 */
function lightBlink(){
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1/action";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var data = {"alert": "lselect"}

    xhr.send(JSON.stringify(data));
    }

/**
 * This function will make a PUT request to the URL
 * http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1/action
 * @param lightId - The ID of the light you want to control.
 */

function lightBlinkOnce(lightId){
    var url = "http://10.58.177.121/api/qMqjGkkf5rQBm8CDoKczf2GDVvwBX93U3ya0AKsI/groups/1/action";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};

    var data = {"alert": "select", "bri": 254}

    xhr.send(JSON.stringify(data));
    }

/**
 * "Sleep for a certain number of milliseconds."
 * 
 * The function takes one argument, which is the number of milliseconds to sleep for
 * @param milliseconds - The number of milliseconds to wait.
 */
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

