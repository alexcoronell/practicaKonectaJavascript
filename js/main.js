var contactForm = document.getElementById('ContactForm');
var numeroIdentificadionAdv = document.getElementById('numeroIdentificadionAdv');
var nombresAdv = document.getElementById('nombresAdv');
var celularAdv = document.getElementById('celularAdv');
var emailAdv = document.getElementById('emailAdv');
var areaOperacionAdv = document.getElementById('areaOperacionAdv');
var cargoAdv = document.getElementById('cargoAdv');
var contactoAdv = document.getElementById('contactoAdv');
var horarioAdv = document.getElementById('horarioAdv');
var Sendbox = document.getElementById('Sendbox');

window.addEventListener('load', init, false);
console.log(contactFormHeight)

function init() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let numeroIdentificacion = document.getElementById('numeroIdentificacion').value;
        let nombres = document.getElementById('nombres').value;
        let celular = document.getElementById('celular').value;
        let email = document.getElementById('email').value;
        let areaOperacion = document.getElementById('areaOperacion').value;
        let cargo = document.getElementById('cargo').value;
        let contacto = document.getElementById('contacto').value;
        let horario = document.getElementById('horario').value;
        if (numeroIdentificacion == '') {
            numeroIdentificadionAdv.style.display = 'block';
            setTimeout(function() {
                numeroIdentificadionAdv.style.display = 'none'
            }, 2000);
            return false;
        };
        if (nombres == '') {
            nombresAdv.style.display = 'block';
            setTimeout(function() {
                nombresAdv.style.display = 'none'
            }, 2000);
            return false;
        }
        if (celular == '') {
            celularAdv.style.display = 'block';
            setTimeout(function() {
                celularAdv.style.display = 'none'
            }, 2000);
            return false;
        }
        if (email == '') {
            emailAdv.style.display = 'block';
            setTimeout(function() {
                emailAdv.style.display = 'none'
            }, 2000);
            return false;
        }
        if (areaOperacion == '') {
            areaOperacionAdv.style.display = 'block';
            setTimeout(function() {
                areaOperacionAdv.style.display = 'none'
            }, 2000);
            return false;
        }
        if (cargo == '') {
            cargoAdv.style.display = 'block';
            setTimeout(function() {
                cargoAdv.style.display = 'none'
            }, 2000);
            return false;
        }
        if (contacto == '') {
            contactoAdv.style.display = 'block';
            setTimeout(function() {
                contactoAdv.style.display = 'none'
            }, 2000);
            return false;
        }
        if (horario == '') {
            horarioAdv.style.display = 'block';
            setTimeout(function() {
                horarioAdv.style.display = 'none'
            }, 2000);
            return false;
        } else {
            Sendbox.style.display = 'block';
            setTimeout(function() {
                Sendbox.style.display = 'none';
                contactForm.reset();
            }, 2000);
        }
    })
}