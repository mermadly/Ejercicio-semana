var dia = prompt ('¿Qué día de la semana es hoy?');

var diaMin = dia.toLowerCase();
var diaST = diaMin.replace(/á/g, 'a');
var diaST = diaST.replace(/é/g, 'e');
var diaST= diaST.replace (/í/g, 'i');
var diaST= diaST.replace (/ó/g, 'o');
var diaST= diaST.replace (/ú/g, 'u');

switch (diaST) {
    case 'lunes':
    document.write ('Hoy es lunes.');    
    document.write ('<br>');
    document.write ('Mañana es martes.');
    break;
    case 'martes':
    document.write('Hoy es martes.');
    document.write ('<br>');
    document.write('Mañana es miércoles.');
    break;
    case 'miercoles':
    document.write ('Hoy es miércoles.');
    document.write ('<br>');
    document.write ('Mañana es jueves.');
    break;
    case 'jueves':
    document.write ('Hoy es jueves');
    document.write ('<br>');
    document.write ('Mañana es viernes.');
    break;
    case 'viernes':
    document.write ('Hoy es viernes.');
    document.write ('<br>');
    document.write ('Mañana es sábado.');
    break;
    case 'sabado':
    document.write ('Hoy es sábado.');
    document.write ('<br>');
    document.write ('Mañana es domingo.');
    break;
    case 'domingo':
    document.write ('Hoy es domingo.');
    document.write ('<br>');
    document.write ('Mañana es día Osvaldo.');
    break;
    case 'osvaldo':
    document.write('Hoy es Osvaldo.');
    document.write ('<br>');
    document.write('Felicidades, vivís en un día inventado.');
    break;
    default: document.write (diaST, ' no es un día válido. Por favor recargue la página e ingrese un día válido.');
}