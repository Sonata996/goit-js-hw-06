const inputRamgeFontSize = document.getElementById('font-size-control')
const spanTextFontSize = document.getElementById('text')



function onInputRamgeControl() {
    spanTextFontSize.style.fontSize = inputRamgeFontSize.value + 'px';
}
inputRamgeFontSize.addEventListener('input', onInputRamgeControl)