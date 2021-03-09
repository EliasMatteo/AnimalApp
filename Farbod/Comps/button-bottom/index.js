function buttonbottomUI() {
    return `
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">

    <div style = '
        display: flex;
        align-items: center;
        flex-direction: column;
        z-index: 10;
        position: sticky;
        '>
        <button onclick='toTop()' 
        style = '
            background-color: #FFE9A7;
            border-radius: 244px;
            width: 244px;
            height: 43px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-weight: bold;
            font-size: 16px;
            color: #242C3C;
            border: none;
            font-family: Roboto, sans-serif;
            '>
            Back to Top
        </button>
    </div>
        `
}

function toTop() {
    window.scrollTo(0, 0);
}