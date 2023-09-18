document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var submitButton = document.querySelector('#submitButton');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
    
      var emailInput = document.getElementById('emailInput').value;
      var passwordInput = document.getElementById('passwordInput').value;
  
      // Ejemplo de validación básica
      if (emailInput === 'jagvms117@gmail.com' && passwordInput === '1234') {
        console.log('Inicio de sesión exitoso');
        window.location.href= './seleccionperf.html'
        
      } else {
        console.log('Credenciales inválidas');
        alert('Credenciales invalidas')
      }
    });
  });