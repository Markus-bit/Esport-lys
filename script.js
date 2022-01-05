update = () => {
  let hsl = `hsl(${hueSlider.value/(4369/24)||0}, ${mySlider2.value||0}%,${mySlider3.value||0}%)`;
  colorBox.style.backgroundColor = hsl;
};

hueSlider.addEventListener("input", update);
mySlider2.addEventListener("input", update);
mySlider3.addEventListener("input", update);
update();


var colorPicker = new iro.ColorPicker("#picker", {
  // Set the size of the color picker
  width: 320,
  // Set the initial color to pure red
  color: "#f00"
});

var colorPicker = new iro.ColorPicker(".colorPicker", {
  // color picker options
  // Option guide: https://iro.js.org/guide.html#color-picker-options
  width: 200,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#000",
});




// https://iro.js.org/guide.html#color-picker-events
// listen to a color picker's color:change event
// color:change callbacks receive the current color
colorPicker.on('color:change', function(color) {
  // log the current color as a HEX string
  console.log(color.hslString);
});

colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  colorPicker.color.hsl = { h: 180, s: 100, l:100 };
  
});

hexInput.addEventListener('change', function() {
  colorPicker.color.hexString = this.value;
});