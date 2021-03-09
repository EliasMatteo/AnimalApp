function oildrumUI(x=0, y=0) {
    return `
    <div style = '
        display:flex;
        position:relative;
        justify-content: center;
        margin-left: 300px;
        margin-bottom: -70px;
        width: 100%;
        height: 100%;
        top:${x};
        left:${y};
    '>
        
        <img src='/img/oildrum.svg'/>
        
    </div>
`
}
