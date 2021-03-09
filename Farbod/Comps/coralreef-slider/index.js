function coralreefUI() {
    return `

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> 
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap" rel="stylesheet">

    <div style='
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    '>
        <div>
            <img id="myImage" style='
            min-width: 370px;
            min-height: 270px;
            max-width: 370px;
            max-height: 270px;
            border: solid white 3px;
            ' 
            src='../../img/coralreefboth.png'>
        </div>
        <div id="buttons" style='
        position: absolute;
        display: flex;
        justify-content: flex-start;
        '>
            <button style='
            height: 54px;
            width: 30px;
            background-color: white;
            color: black;
            font-family: Nanum Gothic, sans-serif;
            border: none;
            font-weight: bold;
            align-items: center;
            text-align: center;
            font-size: 32px;
            ' 
            onclick='coralreefUI.after(this)'><</button>
            <button style='
            height: 54px;
            background-color: white;
            color: black;
            font-family: Roboto, sans-serif;
            border: none;
            font-weight: bold;
            align-items: center;
            text-align: center;
            '
            onclick='coralreef.both(this)'>Compare</button>
            <button style='
            height: 54px;
            width: 30px;
            background-color: white;
            color: black;
            font-family: Nanum Gothic, sans-serif;
            border: none;
            font-weight: bold;
            align-items: center;
            text-align: center;
            font-size: 32px;
            '  
            onclick='coralreefUI.before(this)'>></button>
        </div>
    </div>
    `
    function before() {
        document.getElementById('myImage').src='../../img/coralreefbefore.jpg';
        document.getElementById('buttons').style.opacity = "0.5";
    }
    
    function after() {
        document.getElementById('myImage').src='../../img/coralreefafter.jpg';
        document.getElementById('buttons').style.opacity = "0.5";
    }
    
    function both() {
        document.getElementById('myImage').src='../../img/coralreefboth.png';
        document.getElementById('buttons').style.opacity = "1";
    }
}