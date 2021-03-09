function seafloorUI(x=0, y=0){
    return `<div styel = '
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top:${y}px;
    left:${x}px;
    '>
        
     <img src='/img/seafloor.svg'/>
        
    </div>`
}
