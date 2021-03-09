function FallingTrashUI(src="../../img/bottle.png"){
  return `
  <div class="trashdiv" style="
    height:50em;
    width:100vw;
    position:relative;
  ">
    <img class="trashimg" src="${src}"
    style="
      width:80px;
      height:80px;
      position:absolute;
      opacity:0;
    ">
  </div>
  `
}

function HandleScroll(){
  var scrollTop = document.documentElement.scrollTop + window.innerHeight/2;
  document.querySelectorAll(".trashimg").forEach(el=>{
    var trashTop = el.parentNode.offsetTop;
    if(scrollTop > trashTop && el.src.includes("bottle.png")){
      el.style.animation = "falltoright 5s linear infinite";
    }
    if(scrollTop > trashTop && el.src.includes("can.png")){
      el.style.animation = "falltoleft 5s linear infinite";
    }
  })
}