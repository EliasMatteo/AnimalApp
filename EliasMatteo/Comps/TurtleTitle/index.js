function TurtleUI(x=0, y=0)
{
    return `
        <div style = '
        display: flex;
        position: relative;
        height: 28px;
        width: 61px;
        top:${y}px;
        left:${x}px;
        
        '>
            <img src = '/img/turtle-title.svg' />
        </div>
    `
}