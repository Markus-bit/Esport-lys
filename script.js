



update = () => {
  let hsl = `hsl(${hueSlider.value/(4369/24)||0}, ${mySlider2.value||0}%,${mySlider3.value||0}%)`;
  colorBox.style.backgroundColor = hsl;
};

hueSlider.addEventListener("input", update);
mySlider2.addEventListener("input", update);
mySlider3.addEventListener("input", update);
update();



// Temperature
var kelvinPicker = new iro.ColorPicker("#kelvinPicker", {
  width: 250,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff",
  layoutDirection: 'vertical',
  layout: [
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'kelvin',
        sliderSize: 40,
      }
    },
  ]
});
kelvinPicker.on('input:end', function(kelvin) {
  ct=kelvin.kelvin*0.069
  console.log(kelvin.kelvin)

});

// Wheel only
var wheelPicker = new iro.ColorPicker("#wheelPicker", {
  width: 300,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff",
  layout: [
    {
      component: iro.ui.Wheel,
    },
  ]
});

// listen to a color picker's color:change event
// color:change callbacks receive the current color
wheelPicker.on('input:end', function(color) {
  var url = "http://172.31.0.25/api/79Y4mxDr-5WMo46map5qewHqa-SD8WHyZyqK2GUf/groups/1/action";

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
  }};

  var hue = color.hsl.h*182
  var sat = ((Math.abs(color.hsl.l-100))*5)
  console.log(hue)
  console.log(sat)
  var data = {"hue": hue, "sat": sat}
  //console.log(data)
  xhr.send(JSON.stringify(data));
  // log the current color as a hsl string
  //console.log(color.hsl.h);
});




