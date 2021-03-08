function SchoolFishUI( x=0, y=0)
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
     onclick='SchoolFishUI.HandleClick(this)'
     > 
      <img id='schoolfish1' src = '/img/SchoolFish1' />
    </div>
    
    `
}

SchoolFishUI.HandleClick = (el) =>
{
    el.querySelector('#schoolfish1').style.animation = "fishL 7s ease-in forwards"
}
