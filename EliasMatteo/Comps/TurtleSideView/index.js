function TurtleSideViewUI(x=0, y=0)
{
    return `
        <div style = '
        display:flex;
        position:relative;
        justify-content:center;
        z-index: 0;
        width: 100%;
        height: 100%;
        top:${y}px;
        left:${x}px;
        
        
        
        '>
           <img class='fishesM' src = 'img/turtleSideView.svg'/>
        </div>

    `
}