function capa1() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'CAPA 1: La capa física se ocupa de la conexión física entre dispositivos. Por ejemplo, como la transmisión de datos a través de un cable de cobre o fibra óptica (electricidad, cables, hardware).';
}

function capa2() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'CAPA 2 Esta capa de enlace de datos es responsable de establecer y mantener un enlace entre dispositivos, asegurando que los datos se transmitan de manera precisa y eficiente. También realiza la verificación y corrección de errores para garantizar que los datos se reciban correctamente';
}

function capa3() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'CAPA 3 la capa de red se encarga de enrutar datos entre dispositivos en una red, también determina la ruta más eficiente para que viajen los datos y garantiza que lleguen a su destino.';
}

function capa4() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'CAPA 4 Esta capa de transporte tiene el objetivo de garantizar que los datos se entreguen de manera confiable y en el orden correcto. Agrega control de flujo y comprobación de errores para garantizar que los datos no se pierdan ni se corrompan durante la transmisión. Se encuentran protocolos como TCP.';
}

function capa5() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'CAPA 5 la capa de sesión tiene como fin establecer, mantener y terminar las conexiones entre dispositivos. Permite que los dispositivos se comuniquen entre sí y coordinen sus actividades.';
}

function capa6() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'CAPA 6 Esta capa de presentación es responsable de convertir los datos a un formato que pueda ser entendido por el dispositivo receptor. También maneja el cifrado y la compresión de datos para garantizar que se transmitan de manera segura y eficiente. Formatea los datos para transferirlos a la siguiente capa';
}

function capa7() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'CAPA 7 La capa de aplicación se refiere al tipo específico de aplicación en sí y a sus métodos de comunicación estandarizados. Por ejemplo, los navegadores pueden comunicarse mediante el Protocolo seguro de transferencia de hipertexto (HTTPS) y los clientes de correo electrónico y HTTP pueden comunicarse mediante POP3 (Protocolo de oficina de correo versión 3) y SMTP (Protocolo simple de transferencia de correo).';
}



function borrar() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = '';
}

