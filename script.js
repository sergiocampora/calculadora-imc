function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const imc = weight / (height * height);
        document.getElementById('result').innerText = `Tu IMC es: ${imc.toFixed(2)}`;
        // Agregar distintivo de obesidad si el IMC es mayor o igual a 30.
        if (imc >= 30) {
            document.getElementById('badge-obesity').style.display = 'block';
        } else {
            document.getElementById('badge-obesity').style.display = 'none';
        }
    } else {
        document.getElementById('result').innerText = 'Ingresa un peso y altura válidos.';
        document.getElementById('badge-obesity').style.display = 'none';
    }
}