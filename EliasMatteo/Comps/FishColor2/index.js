function Fish2UI( x=0, y=0)
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
    onclick='Fish2UI.HandleClick(this)'
> 
    <img class='fishesM' id='fish2' src = '/img/fishColor2.svg'/>

</div>
    
    `
}

Fish2UI.HandleClick = (el) =>
{
    el.querySelector('#fish2').style.animation = 'fishR 7s ease-in forwards'
}
    