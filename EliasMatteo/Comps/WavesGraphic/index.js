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
            



        
            '

            >
                <img class='fishesM' id='waves' src = '/img/waves.svg'/>
            </div>
            
            `
        }
        
        
    // onload= 'WavesUI.HandleOpa(this)'
    // WavesUI.HandleOpa = (el) =>
    // {  
    //     el.style.animation = "waves 5s linear"
    // }