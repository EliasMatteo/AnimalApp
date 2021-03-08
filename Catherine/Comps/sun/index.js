function RotateSunUI(src="http://placekitten.com/300/300") {
  return `
    <div class="sundiv" style="
      height:5em;
      width:5em;
      background-color:#333;
    ">
      <img class="sunimg rotate" src="${src}"
      style="
        height:5em;
        width:5em;
      ">
    </div>
  `
}