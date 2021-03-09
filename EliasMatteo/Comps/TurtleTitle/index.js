function TurtleUI(x=0, y=0)
{
    return `
        <div style = '
        display: flex;
        position: relative;
        justify-content: center;
        height: 28px;
        width: 61px;
        top:${y}px;
        left:${x}px;
        
        '>
            <img class='fishesM' src = '/img/turtle-title.svg' />
        </div>
    `
}