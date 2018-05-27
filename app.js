window.onload = () => {
  stage();
}
  let age = prompt('Ingresa tu edad en números');

const stage = () => {
  if(age >= 1 && age <=3) {
    document.getElementById('results').innerHTML = 'Toddler';
  } else if(age > 3 && age <= 5) {
    document.getElementById('results').innerHTML = 'Preescolar';
  } else if(age > 5 && age <= 12) {
    document.getElementById('results').innerHTML = 'Gradeschooler';
  } else if(age > 12 && age < 18){
    document.getElementById('results').innerHTML = 'Adolescente';
  } else if(age >= 18 && age <= 21) {
    document.getElementById('results').innerHTML = 'Adulto joven';
  } else if(age > 21) {
    document.getElementById('results').innerHTML = 'Adulto';
  } else {
    alert('Por favor ingrese un número válido');
    location.reload();
  }
}






