function capa1() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'MODELO OSI: CAPA 1 \nLa capa física se ocupa de la conexión física entre dispositivos. Por ejemplo, como la transmisión de datos a través de un cable de cobre o fibra óptica (electricidad, cables, hardware). \n \n \n \nEsta capa tambien pertenece a la capa 1 del modelo TCP/IP';
}

function capa2() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'MODELO OSI: CAPA 2 \nEsta capa de enlace de datos es responsable de establecer y mantener un enlace entre dispositivos, asegurando que los datos se transmitan de manera precisa y eficiente. También realiza la verificación y corrección de errores para garantizar que los datos se reciban correctamente \n \n \n \nEsta capa tambien pertenece a la capa 1 del modelo TCP/IP';
}

function capa3() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'MODELO OSI: CAPA 3 \nla capa de red se encarga de enrutar datos entre dispositivos en una red, también determina la ruta más eficiente para que viajen los datos y garantiza que lleguen a su destino. \n \n \n \nEsta capa tambien pertenece a la capa 2 del modelo TCP/IP';
}

function capa4() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'MODELO OSI: CAPA 4 \nEsta capa de transporte tiene el objetivo de garantizar que los datos se entreguen de manera confiable y en el orden correcto. Agrega control de flujo y comprobación de errores para garantizar que los datos no se pierdan ni se corrompan durante la transmisión. Se encuentran protocolos como TCP. \n \n \n \nEsta capa tambien pertenece a la capa 3 del modelo TCP/IP';
}

function capa5() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'MODELO OSI: CAPA 5 \nla capa de sesión tiene como fin establecer, mantener y terminar las conexiones entre dispositivos. Permite que los dispositivos se comuniquen entre sí y coordinen sus actividades. \n \n \n \nEsta capa tambien pertenece a la capa 4 TCP/IP';
}

function capa6() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'MODELO OSI: CAPA 6 \nEsta capa de presentación es responsable de convertir los datos a un formato que pueda ser entendido por el dispositivo receptor. También maneja el cifrado y la compresión de datos para garantizar que se transmitan de manera segura y eficiente. Formatea los datos para transferirlos a la siguiente capa \n \n \n \nEsta capa tambien pertenece a la capa 4 TCP/IP';
}

function capa7() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = 'MODELO OSI: CAPA 7 \nLa capa de aplicación se refiere al tipo específico de aplicación en sí y a sus métodos de comunicación estandarizados. Por ejemplo, los navegadores pueden comunicarse mediante el Protocolo seguro de transferencia de hipertexto (HTTPS) y los clientes de correo electrónico y HTTP pueden comunicarse mediante POP3 \n \n \n \nEsta capa tambien pertenece a la capa 4 TCP/IP';
}



function borrar() {
    const infoBox = document.getElementById('infoBox');
    infoBox.value = '';
}

