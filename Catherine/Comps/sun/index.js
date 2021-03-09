function RotateSunUI(x=0, y=0) {
  return `
    <div class="sundiv" style="
      height:5em;
      width:5em;
      top:${y}px;
      left:${x}px;
      position: absolute;
    ">
      <img class="sunimg rotate" 
      src="../../img/sun.png"
      style="
        height:5em;
        width:5em;
      ">
    </div>
  `
}