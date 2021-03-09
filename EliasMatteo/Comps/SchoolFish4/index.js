function SchoolFish4UI( x=0, y=0)
{
    return `
     <div style = '
        display:flex;
        justify-content: flex-start;
        z-index: 0;
        width: 100%;
        height: 100%;
        top:${y}px;
        left:${x}px;
           
   '
     onclick='SchoolFish4UI.HandleClick(this)'
     > 
      <img class='fishesM' id='schoolfish4' src = '/img/SchoolFish5.svg' />
    </div>
    
    `
}

SchoolFish4UI.HandleClick = (el) =>
{
    el.querySelector('#schoolfish4').style.animation = "fishL 7s ease-in forwards"
}