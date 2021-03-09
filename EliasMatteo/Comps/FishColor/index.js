function FishUI( x=0, y=0)
{
    return `
    <div style ='
        display: flex;
        position:relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        top:${y}px;
        left:${x}px;
        

'
    onclick='FishUI.HandleClick(this)'
>
    <img class='fishesM' id='fish1' src = '/img/fishColor1.svg'/>
    
</div>
    
    `
}

FishUI.HandleClick = (el) =>
{
    el.querySelector('#fish1').style.animation = "fishL 7s ease-in 1 forwards"
}
