const celsius = document.getElementById('celsius');
const farenheight = document.getElementById('farenheit');


const updateFarenheit = () => {
    farenheight.value = parseFloat(celsius.value * 9/5) + 32;
};

const updateCelsius = () => {
    celsius.value = parseFloat(farenheight.value - 32) * 5/9;
};

celsius.addEventListener('input', updateFarenheit);
farenheight.addEventListener('input', updateCelsius );





const reset = () => {
    farenheight.value = "";
    celsius.value = "";

}