const textField = document.getElementById('text-field');
const divElement = document.getElementById('div-element'); 

textField.addEventListener('mouseover', function() {
    divElement.style.display = 'block';
})

textField.addEventListener('mouseout', function() {
    divElement.style.display = 'none';
}) 