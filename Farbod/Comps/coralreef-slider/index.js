function coralreefUI() {
    return `

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> 
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap" rel="stylesheet">

    <div class="contain-img">
        <div class="comp-img">
            <img class='compar' src=/img/coralreefbefore.jpg style ='
                height: 400px;
                width: 400px;
            
            '>
        </div>

        <div class="comp-img comp-overlay">
            <img class='compar' src="/img/coralreefafter.jpg" style='
                height:400px;
                width: 400px;
            
            '>
        </div>
    </div>

    `
}

function IMGcomp()
{
    var x = document.getElementsByClassName('comp-overlay')
    for (i=0; i < x.length; i++)
    {
        showImg(x[i])
    }
    function showImg(img)
    {
        var slider, img, clicked = 0, w, h;
        //setting up function to find wdith and height of element
        w = img.offsetWidth
        h = img.offsetheight
        // setting width
        img.style.width = (w / 2) + 'px'
        // now we make the slider
        slider = document.createElement('DIV')
        slider.setAttribute('class', 'slider')
        // inserting the slider now
        img.parentElement.insertBefore(slider, img)
        // place slider in middle of imgs
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + 'px'
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 'px'
        // now so that the slider works on mouse click/ over
        slider.addEventListener('mousedown', sliderG)
        // now the same thing but if the mouse is no longer over/released
        window.addEventListener('mouseup', sliderF)
        
        function sliderG(e)
        { // object here is to stop anything from getting in the way of the slider
            e.preventDefault()
            // this will say the slider is clicked
            clicked = 1
            // and we do a function when the slider is moved
            window.addEventListener('mousemove', sliderS)
        }
        function sliderF()
        {// this function is for when the slider is not clicked 
            clicked = 0
        }
        function sliderS(e)
        {
            // if the slider is no llonger clicked itll stop using it 
            if (clicked == 0) return false
            // now we grab the cords 
            var pos = getCursorPos(e)
            if (pos < 0) pos = 0
            if (pos > w) pos = w
            // now a function allows this function to do its job
            slide(pos)
        }
        function getCursorPos(e)
        {
            var a, x = 0
            e = e || window.event
            //get the x position of the img
            a = img.getBoundingClientRect()
            //calculate the cursors x position according to the image
            x = e.pageX - a.left
            // we take into account any page scrolling
            x = x - window.pageXOffset
            return x
        }
        function slider(x)
        {// resizing img
            img.style.width = x + 'px'
            // now for position the slider
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + 'px'
        }

    }
}









// function before() {
//     document.getElementById('#myImage').src='/img/coralreefbefore.jpg';
//     document.getElementById('#buttons').style.opacity = "0.5";
// }

// function after() {
//     document.getElementById('#myImage').src='/img/coralreefafter.jpg';
//     document.getElementById('#buttons').style.opacity = "0.5";
// }

// function both() {
//     document.getElementById('#myImage').src='/img/coralreefboth.png';
//     document.getElementById('#buttons').style.opacity = "1";
// }