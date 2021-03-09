function oildrumUI(x=0, y=0) {
    return `
    <div style = '
        display:flex;
        position:relative;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        margin-top:70px;
        margin-bottom: 0px;
        top:${x};
        left:${y};
    '>
        
        <img src='/img/oildrum.svg'/>
        
    </div>
`
}
