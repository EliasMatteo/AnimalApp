function SchoolFish3UI( x=0, y=0)
{
    return `
     <div style = '
        display:flex;
        justify-content: flex-end;
        z-index: 0;
        width: 100%;
        height: 100%;
        top:${y}px;
        left:${x}px;
           
   '
     onclick='SchoolFish3UI.HandleClick(this)'
     > 
      <img id='schoolfish3' src = '/img/SchoolFish3' />
    </div>
    
    `
}

SchoolFish3UI.HandleClick = (el) =>
{
    el.querySelector('#schoolfish3').style.animation = "fishR 7s ease-in forwards"
}