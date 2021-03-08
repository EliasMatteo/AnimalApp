function WavesUI(x=0, y=0)
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
            opacity:1;
            transition:opacity 0.5s;



        
            '
            onload= 'WavesUI.HandleOpa(this)'
        >
        <img id='waves' src = '/img/waves.svg' />
        </div>
        
        `
    }

    
    WavesUI.HandleOpa = (el) =>
{  
  el.style.animation = "waves 5s linear"
}