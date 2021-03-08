function WavesUI()
{
    return `
        <div style = '
            display: flex;
            justify-content: center;
            z-index: 0;
            width: 100%;
            height: 100%;
            top:${y}px;
            left:${x}px;



        
        '
            
        >
         <img id='waves' src = '/img/waves.svg' />
        </div>
    
    `
}