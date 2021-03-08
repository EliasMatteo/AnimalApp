function SchoolFish2UI( x=0, y=0)
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
     onclick='SchoolFish2UI.HandleClick(this)'
     > 
      <img id='schoolfish2' src = '/img/SchoolFish2.svg' />
    </div>
    
    `
}

SchoolFish2UI.HandleClick = (el) =>
{
    el.querySelector('#schoolfish2').style.animation = "fishL 7s ease-in forwards"
}