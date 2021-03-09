function popupUI() {
    return `

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> 
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">

<div>
    <div>
        <button type='button' onclick='vis()' 
        style='
        position: absolute;
        margin-left: 10px;
        margin-top: 10px;
        overflow: hidden;
        width: 40px;
        height: 40px;
        border-radius: 30%;
        background-color: #FFE9A7;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;'>
            <div style='
            font-family: Varela Round, sans-serif;
            font-weight: bold;
            align-items: center;
            text-align: center;
            padding-top: 11%;
            font-size: 26px;
            color: #88A7BC;
            '>i</div>
        </button>
    </div>
    <div id="cent" style='
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: none;
    position: absolute;
    z-index: 1;
    '>
        <div style='
        width: 290px;
        height: 645px;
        border-radius: 12px;
        background-color: white;
        border: solid 3px #FFE9A7;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        '>
        <div style='
        color: #242C3C;
        font-size: 16px;
        display: flex;
        font-family: Roboto, sans-serif;
        text-align: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-weight: 200;
        '>
            <b>Team Members</b>
            Catherine<br>
            Farbod<br>
            Mateo<br>
            <br>
            <br>
            <b>Topics</b>
            Social Awareness<br>
            Climate Change<br>
            <br>
            <br>
            <b>Goals</b>
            To educate using<br>
            interactive storytelling<br>
            <br>
            References:<br>
            <br>
            https://www.worldwil<br>dlife.org/species/haw<br>ksbill-turtle
            <br>
            <br>
            https://oliveridleyp<br>roject.org/life-cycle-<br>of-turtles
        </div>
        <br>
        <br>
        <div><button style='
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: #FFE9A7;
        border-radius: 244px;
        width: 244px;
        height: 43px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: bold;
        font-size: 16px;
        color: #242C3C;
        border: none;
        font-family: Roboto, sans-serif;'
        onclick="invis()">
        Foundation Link</button></div>
    </div>
</div>
`
}

function vis() {
    document.getElementById('cent').style.display = "flex"
}

function invis() {
    document.getElementById('cent').style.display = "none"
}
    //     if (buttonC.click.display === "none") {
//     poppy.style.display = "flex";
// } 
//     else {
//     poppy.style.display = "none";
//     }
// }

