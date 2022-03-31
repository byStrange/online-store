// this function is for cards to set  their background color

;(function () {
    const colors = ['#62BFC4', '#9081D7', '#FD2A3F', '#2CB8DF', '#52D344']
    const colorElement = document.querySelectorAll('.mini-cards .cardy');
    if (colors.length == colorElement || colorElement.length > colors)  {
        for (let i = 0; i < colorElement.length; i++) {
            colorElement[i].style.backgroundColor = colors[i];
        }
    } else {
        for (let i = 0; i  < colorElement.length - colors.length ; i++) {
            var generateColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
            colors.push(generateColor);
        }
        for (let i = 0; i < colorElement.length; i++) {
            colorElement[i].style.backgroundColor = colors[i];
        }
    }
    console.log(colorElement)
})()

;(function () {
    document.querySelector('.toggler-icon').addEventListener('click', function () {
        var leftPanel = document.querySelector('.left-panel');
        leftPanel.classList.toggle('collapsed');
        document.querySelector('[main].container').classList.toggle('active');
        setTimeout(()=>{
            leftPanel.querySelectorAll('a').forEach(e => e.style.display='none')
        }, 500)
    })
})()