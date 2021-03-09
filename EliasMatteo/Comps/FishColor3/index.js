function Fish3UI( x=0, y=0)
{
    return `
     <div style = '
        display:flex;
        position:relative;
        justify-content: flex-end;
        z-index: 0;
        width: 100%;
        height: 100%;
        top:${y}px;
        left:${x}px;
           
   '
     onclick='Fish3UI.HandleClick(this)'
     > 
      <img class='fishesM' id='fish3' src = '/img/fishColor3.svg' />
    </div>
    
    `
}

Fish3UI.HandleClick = (el) =>
{
    el.querySelector('#fish3').style.animation = "fishR 7s ease-in forwards"
}
