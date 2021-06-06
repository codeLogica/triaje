//--------------------------------BOTONES DE LOS HOJAS HTML-------------------------------//
//Constantes de los botones de Conciencia
const btnConcienciaDespierto = document.querySelector('.concienciaDespierto');
const btnConcienciaDormido = document.querySelector('.concienciaDormido');
const btnConcienciaIrritable = document.querySelector('.concienciaIrritable');
const btnConcienciaConvulsiones = document.querySelector('.concienciaConvulsiones')

//Constantes de los botones de Color Piel
const btnPielRosa = document.querySelector('.colorPielRosa');
const btnPielPalida = document.querySelector('.colorPielPalida');
const btnPielCiano = document.querySelector('.colorPielCianotica');
const btnPielRubi = document.querySelector('.colorPielRubicunda');
const btnPielMarmo = document.querySelector('.colorPielMarmorea');
const btnPielPurpura = document.querySelector('.colorPielPurpura');

//Constantes de los botones de Hidratacion
const btnHidraPielNml = document.querySelector('.estadoHidratacionPielNormal');
const btnHidraPielPastosa = document.querySelector('.estadoHidratacionPielPastosa');

const btnHidraMucosaNml = document.querySelector('.estadoHidratacionMucosaNormal');
const btnHidraMucosaSeca = document.querySelector('.estadoHidratacionMucosaSeca');

const btnHidraOjoNml = document.querySelector('.estadoHidratacionOjoNormal');
const btnHidraOjoHundido = document.querySelector('.estadoHidratacionOjoHundido');

const btnHidraVomitoPres = document.querySelector('.estadoHidratacionVomitoPresente');
const btnHidraVomitoAus = document.querySelector('.estadoHidratacionVomitoAusente');

const btnHidraTolera = document.querySelector('.estadoHidratacionTolera');
const btnHidraNoTolera = document.querySelector('.estadoHidratacionNoTolera');

const btnHidraPlieguePos = document.querySelector('.estadoHidratacionPlieguePositivo');
const btnHidraPliegueNeg = document.querySelector('.estadoHidratacionPliegueNegativo');

//Constantes de los botones de Actividad
const btnActividadJuega = document.querySelector('.activJuega');
const btnActividadConfundido = document.querySelector('.activConfundido');
const btnActividadLetarg = document.querySelector('.activLetargico');
const btnActividadIncons = document.querySelector('.activInconsciente');

//Constates de los botones de Tono
const btnTonoEuto = document.querySelector('.tonoEuto');
const btnTonoHipo = document.querySelector('.tonoHipo');
const btnTonoHiper = document.querySelector('.tonoHiper');

//Constantes de los botones de Contacto Visual
const btnMantieneMira = document.querySelector('.mantieneMirada');
const btnNoMantieneMira = document.querySelector('.noMantieneMirada');
const btnNoDirigeMira = document.querySelector('.noDirigeMirada');

//Constantes de los botones de Llanto
const btnLlantoFuerte = document.querySelector('.llantoFuerte');
const btnLlantoDebil = document.querySelector('.llantoDebil');

const btnLlantoConso = document.querySelector('.llantoConsolable');
const btnLlantoInconso = document.querySelector('.llantoInconsolable');

//Constantes de los botones de Respiratorio
const btnRuidoPres = document.querySelector('.ruidosPatologicosPresentes');
const btnRuidoAus = document.querySelector('.ruidosPatologicosAusentes');

const btnDificultadPres = document.querySelector('.dificultadRespiratoriaPresente');
const btnDificultadAus = document.querySelector('.dificultadRespiratoriaAusente');

const btnPosicionPres = document.querySelector('.posicionRespiratoriaPresente');
const btnPosicionAus = document.querySelector('.posicionRespiratoriaAusente');

//Constantes de los botones de Antecedentes
const btnAntecedentesPres = document.querySelector('.antecedentesPresentes');
const btnAntecedentesAus = document.querySelector('.antecedentesAusentes');

//Constantes de los botones de Abuso
const btnAbusoPres = document.querySelector('.abusoPresente');
const btnAbusoAus = document.querySelector('.abusoAusente');

//-----------------------------ESCALAS DE MEDICION DE GRAVEDAD-------------------------//
//Variables para Triangulo de Evaluacion Pediatrica (TEP)
//Variable Apariencia se divide en 4
let trianguloAPariencia;
let trianguloAparienciaInteraccion;
let trianguloAparienciaTono;
let trianguloAParienciaMirada;
let trianguloAparienciaLlanto;
let trianguloCirculacion;
let trianguloRespiracion;

//Variables para Sistema de Alerta Temprana (SAT)
let sistemaAlertaTemprana;

//Variables para Save A Child (SAC)
let saveChild;

//----------------------------ESCALA DE TRIAJE CANADIENSE PEDIATRICA---------------------------//
//Se asigna el valor correspondiente segun los resultados en conjunto de las escalas anteriores
//Valores del I - V; I corresponde MAYOR gravedad; V corresponde MENOR gravedad
//Color ------ Valor
//Azul  ------  V
//Verde ------  IV
//Amarillo ---  III
//Naranja ----  II
//Rojo  ------  I
//Varibale para guardar valor correspondiente del TEP al paedCTAS
let paedctasTriangulo;

//Varibale para guardar valor correspondiente del SAT al paedCTAS
let paedctasAlerta;

//Varibale para guardar valor correspondiente del SAC al paedCTAS
let paedctasChild;

//----------------------------------RESPIRATORIO-----------------------------------//
//Elementos necesarios para crear Combobox con opciones seleccionables en el area respiratoria
//Elemento nuevos para crear botones con opciones
let elementoSelect = document.createElement('select');
let elementoOpciones = document.createElement('option');

//Variables para crear opciones con ruidos respiratorios
const contenedorRuidos = document.getElementById('ruido-respiratorio');
let ruidos = ['Gruñido', 'Estridor | Disfonia', 'Quejido', 'Silibancias'];

//Variables para crear opciones con datos de dificultad
const contenedorDificultad = document.getElementById('dificultad-respiratorio');
let datosDificultad = ['Tiraje Intercostal', 'Retraccion Xifoidea', 'Aleteo Nasal', 'Disosiacion Toraco-abdominal'];

//Variables para crear opciones con posiciones patologicas respiratorias
const contenedorPosicion = document.getElementById('posicion-respiratorio');
let posicionesPatologicas = ['Tripode', 'Olfateo', 'Cabeceo'];

//Funcion para seleccionar condicion respiratoria especifica
function crearBoton(valor){
    if(valor === 'ruidoPresente'){
        for(opcion of ruidos){
            elementoOpciones.textContent = [opcion];
            elementoOpciones.value = [opcion.toLowerCase()];
        }
        elementoOpciones.onclick=valorBoton(elementoOpciones.value);
        elementoSelect.name = 'ruidos'
        elementoSelect.appendChild(elementoOpciones);
        contenedorRuidos.appendChild(elementoSelect);

        btnRuidoPres.disabled = true;
        btnRuidoAus.disabled = true;

    }else if(valor === 'dificultadPresente'){
        for(opcion of datosDificultad){
            elementoOpciones.textContent = [opcion];
            elementoOpciones.value = [opcion.toLowerCase()];
        }
        elementoOpciones.onclick=valorBoton(elementoOpciones.value);
        elementoSelect.name = 'dificultad'
        elementoSelect.appendChild(elementoOpciones);
        contenedorDificultad.appendChild(elementoSelect);

        btnDificultadPres.disabled = true;
        btnDificultadAus.disabled = true;

    }else if(valor === 'posicionPresente'){
        for(opcion of posicionesPatologicas){
            elementoOpciones.textContent = [opcion];
            elementoOpciones.value = [opcion.toLowerCase()];
        }
        elementoOpciones.onclick=valorBoton(elementoOpciones.value);
        elementoSelect.name = 'posicion'
        elementoSelect.appendChild(elementoOpciones);
        contenedorPosicion.appendChild(elementoSelect);

        btnPosicionPres.disabled = true;
        btnPosicionAus.disabled = true;
    }

}

//--------------------------ASIGNACION DE VALOR A ESCALAS SEGUN CONDICION CLINICA---------------------//
//Se pasa parametro en forma de string desde html y se asigna un valor a las variables
//correspondientes para la medicion de la gravedad clinica 
function valorBoton(valor){
    trianguloAparienciaInteraccion = true;
    trianguloAparienciaTono = true;
    trianguloAParienciaMirada = true;
    trianguloAparienciaLlanto = true;
    trianguloRespiracion = true;
    trianguloCirculacion = true;

    sistemaAlertaTemprana = 0;
    saveChild = 0;

    if (valor === 'despierto'){
        if(trianguloAparienciaInteraccion != false){
            trianguloAparienciaInteraccion = true;
        }
        sistemaAlertaTemprana += 0;
        saveChild += 0;

        btnConcienciaDespierto.disabled = true;
        btnConcienciaDormido.disabled = true;
        btnConcienciaIrritable.disabled = true;
        btnConcienciaConvulsiones.disabled = true;

    }else if(valor === 'dormido'){
        if(trianguloAparienciaInteraccion != false){
            trianguloAparienciaInteraccion = true;
        }
        sistemaAlertaTemprana += 1;
        saveChild += 0;

        btnConcienciaDespierto.disabled = true;
        btnConcienciaDormido.disabled = true;
        btnConcienciaIrritable.disabled = true;
        btnConcienciaConvulsiones.disabled = true;

    }else if(valor === 'irritable'){
        trianguloAparienciaInteraccion = false;
        sistemaAlertaTemprana += 2;
        saveChild += 3;

        btnConcienciaDespierto.disabled = true;
        btnConcienciaDormido.disabled = true;
        btnConcienciaIrritable.disabled = true;
        btnConcienciaConvulsiones.disabled = true;

    }else if(valor === 'convulsiones'){
        trianguloAparienciaInteraccion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 9;

        btnConcienciaDespierto.disabled = true;
        btnConcienciaDormido.disabled = true;
        btnConcienciaIrritable.disabled = true;
        btnConcienciaConvulsiones.disabled = true;

    }else if(valor === 'rosada'){
        if(trianguloCirculacion != false){
            trianguloCirculacion = true;
        }
        sistemaAlertaTemprana += 0;
        saveChild += 0;

        btnPielRosa.disabled = true;
        btnPielPalida.disabled = true;
        btnPielCiano.disabled = true;
        btnPielRubi.disabled = true;
        btnPielMarmo.disabled = true;
        btnPielPurpura.disabled = true;

    }else if(valor === 'palida'){
        if(trianguloCirculacion != false){
            trianguloCirculacion = true;
        }        
        sistemaAlertaTemprana += 1;
        saveChild += 3;

        btnPielRosa.disabled = true;
        btnPielPalida.disabled = true;
        btnPielCiano.disabled = true;
        btnPielRubi.disabled = true;
        btnPielMarmo.disabled = true;
        btnPielPurpura.disabled = true;
        
    }else if(valor === 'cianotica'){
        trianguloCirculacion = false;
        sistemaAlertaTemprana += 2;
        saveChild += 9;

        btnPielRosa.disabled = true;
        btnPielPalida.disabled = true;
        btnPielCiano.disabled = true;
        btnPielRubi.disabled = true;
        btnPielMarmo.disabled = true;
        btnPielPurpura.disabled = true;
        
    }else if(valor === 'rubicunda'){
        trianguloCirculacion = false;
        sistemaAlertaTemprana += 2;
        saveChild += 9;

        btnPielRosa.disabled = true;
        btnPielPalida.disabled = true;
        btnPielCiano.disabled = true;
        btnPielRubi.disabled = true;
        btnPielMarmo.disabled = true;
        btnPielPurpura.disabled = true;
        
    }else if(valor === 'marmorea'){
        trianguloCirculacion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 9;

        btnPielRosa.disabled = true;
        btnPielPalida.disabled = true;
        btnPielCiano.disabled = true;
        btnPielRubi.disabled = true;
        btnPielMarmo.disabled = true;
        btnPielPurpura.disabled = true;
        
    }else if(valor === 'purpurica'){
        trianguloCirculacion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 9;  

        btnPielRosa.disabled = true;
        btnPielPalida.disabled = true;
        btnPielCiano.disabled = true;
        btnPielRubi.disabled = true;
        btnPielMarmo.disabled = true;
        btnPielPurpura.disabled = true;
        
    }else if(valor === 'pielNormal'){
        saveChild += 0;
        btnHidraPielNml.disabled = true;
        btnHidraPielPastosa.disabled = true;
    }else if(valor === 'pielPastosa'){
        saveChild += 1.5;
        btnHidraPielNml.disabled = true;
        btnHidraPielPastosa.disabled = true;
    }else if(valor === 'mucosaNormal'){
        saveChild += 0;
        btnHidraMucosaNml.disabled = true;
        btnHidraMucosaSeca.disabled = true;
    }else if(valor === 'mucosaSeca'){
        saveChild += 1.5;
        btnHidraMucosaNml.disabled = true;
        btnHidraMucosaSeca.disabled = true;
    }else if(valor === 'ojoNormal'){
        saveChild += 0;
        btnHidraOjoNml.disabled = true;
        btnHidraOjoHundido.disabled = true;
    }else if(valor === 'ojoHundido'){
        saveChild += 1.5;
        btnHidraOjoNml.disabled = true;
        btnHidraOjoHundido.disabled = true;
    }else if(valor === 'vomitoPresente'){
        saveChild += 1.5;
        btnHidraVomitoPres.disabled = true;
        btnHidraVomitoAus.disabled = true;
    }else if(valor === 'vomitoAusente'){
        saveChild += 0;
        btnHidraVomitoPres.disabled = true;
        btnHidraVomitoAus.disabled = true;
    }else if(valor === 'toleraVO'){
        saveChild += 0;
        btnHidraTolera.disabled = true;
        btnHidraNoTolera.disabled = true;
    }else if(valor === 'noToleraVO'){
        saveChild += 1.5;
        btnHidraTolera.disabled = true;
        btnHidraNoTolera.disabled = true;
    }else if(valor === 'plieguePositivo'){
        saveChild += 1.5;
        btnHidraPlieguePos.disabled = true;
        btnHidraPliegueNeg.disabled = true;
    }else if(valor === 'pliegueNegativo'){
        saveChild += 0;
        btnHidraPlieguePos.disabled = true;
        btnHidraPliegueNeg.disabled = true;
    }else if(valor === 'actividadJuega'){
        if(trianguloAparienciaInteraccion != false){
            trianguloAparienciaInteraccion = true;
        }
        sistemaAlertaTemprana += 0;
        saveChild += 0;

        btnActividadJuega.disabled = true;
        btnActividadConfundido.disabled = true;
        btnActividadLetarg.disabled = true;
        btnActividadIncons.disabled = true;

    }else if(valor === 'actividadConfundido'){
        trianguloAparienciaInteraccion = false;
        sistemaAlertaTemprana += 2;
        saveChild += 3;

        btnActividadJuega.disabled = true;
        btnActividadConfundido.disabled = true;
        btnActividadLetarg.disabled = true;
        btnActividadIncons.disabled = true;

    }else if(valor === 'actividadLetargico'){
        trianguloAparienciaInteraccion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 3;

        btnActividadJuega.disabled = true;
        btnActividadConfundido.disabled = true;
        btnActividadLetarg.disabled = true;
        btnActividadIncons.disabled = true;

    }else if(valor === 'actividadInconsciente'){
        trianguloAparienciaInteraccion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 9;

        btnActividadJuega.disabled = true;
        btnActividadConfundido.disabled = true;
        btnActividadLetarg.disabled = true;
        btnActividadIncons.disabled = true;

    }else if(valor === 'eutonico'){
        if(trianguloAparienciaTono != false){
            trianguloAparienciaTono = true;
        }

        btnTonoEuto.disabled = true;
        btnTonoHiper.disabled = true;
        btnTonoHipo.disabled = true;

    }else if(valor === 'hipotonico' || valor === 'hipertonico'){
        trianguloAparienciaTono = false;

        btnTonoEuto.disabled = true;
        btnTonoHiper.disabled = true;
        btnTonoHipo.disabled = true;

    }else if(valor === 'mantieneMirada'){
        if(trianguloAParienciaMirada != false){
            trianguloAParienciaMirada = true;
        }
        saveChild += 0;

        btnMantieneMira.disabled = true;
        btnNoMantieneMira.disabled = true;
        btnNoDirigeMira.disabled = true;

    }else if(valor === 'noMantieneMirada'){
        trianguloAParienciaMirada = false;
        saveChild += 3;

        btnMantieneMira.disabled = true;
        btnNoMantieneMira.disabled = true;
        btnNoDirigeMira.disabled = true;

    }else if(valor === 'noDirigeMirada'){
        trianguloAParienciaMirada = false;
        saveChild += 9;

        btnMantieneMira.disabled = true;
        btnNoMantieneMira.disabled = true;
        btnNoDirigeMira.disabled = true;

    }else if(valor === 'llantoFuerte'){
        if(trianguloAparienciaLlanto != false){
            trianguloAparienciaLlanto = true;
        }
        saveChild += 0;

        btnLlantoFuerte.disabled = true;
        btnLlantoDebil.disabled = true;

    }else if(valor === 'llantoDebil'){
        trianguloAparienciaLlanto = false;
        saveChild += 3;

        btnLlantoFuerte.disabled = true;
        btnLlantoDebil.disabled = true;

    }else if(valor === 'llantoConsolable'){
        if(trianguloAparienciaLlanto != false){
            trianguloAparienciaLlanto = true;
        }
        saveChild += 0;

        btnLlantoConso.disabled = true;
        btnLlantoInconso.disabled = true;

    }else if(valor === 'llantoInconsolable'){
        trianguloAparienciaLlanto = false;
        saveChild += 9;

        btnLlantoConso.disabled = true;
        btnLlantoInconso.disabled = true;
        
    }else if(valor === 'ruidoAusente'){
        if(trianguloRespiracion != false){
            trianguloRespiracion = true;
        }
        sistemaAlertaTemprana += 0;
        saveChild += 0;

        btnRuidoPres.disabled = true;
        btnRuidoAus.disabled = true;

    }else if(valor === 'gruñido'){
        trianguloRespiracion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 3;
    }else if(valor === 'estridor | disfonia'){
        trianguloRespiracion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 3;
    }else if(valor === 'quejido'){
        trianguloRespiracion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 3;
    }else if(valor === 'silibancias'){
        trianguloRespiracion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 3;
    }else if(valor === 'dificultadAusente'){
        if(trianguloRespiracion != false){
            trianguloRespiracion = true;
        }
        sistemaAlertaTemprana += 0;
        saveChild += 0;

        btnDificultadPres.disabled = true;
        btnDificultadAus.disabled = true;

    }else if(valor === 'tiraje intercostal'){
        trianguloRespiracion = false;
        sistemaAlertaTemprana += 1;
        saveChild += 3;
    }else if(valor === 'retraccion xifeoidea'){
        trianguloRespiracion = false;
        sistemaAlertaTemprana += 2
        saveChild += 9;
    }else if(valor === 'aleteo nasal'){
        trianguloRespiracion = false;
        sistemaAlertaTemprana += 2;
        saveChild += 9;
    }else if(valor === 'disosiacion toraco-abdominal'){
        trianguloRespiracion = false;
        sistemaAlertaTemprana += 3;
        saveChild += 9;
    }else if(valor === 'posicionAusente'){
        if(trianguloRespiracion != false){
            trianguloRespiracion = true;
        }
        sistemaAlertaTemprana += 0;

        btnPosicionPres.disabled = true;
        btnPosicionAus.disabled = true;
        
    }else if(valor === 'tripode'){
        trianguloRespiracion = false;
    }else if(valor === 'olfateo'){
        trianguloRespiracion = false;
    }else if(valor === 'cabeceo'){
        trianguloRespiracion = false;
    }else if(valor === 'antecedentesPresentes'){
        saveChild += 3;

        btnAntecedentesPres.disabled = true;
        btnAntecedentesAus.disabled = true;

    }else if(valor === 'antecedentresAusentes'){
        saveChild += 0;

        btnAntecedentesPres.disabled = true;
        btnAntecedentesAus.disabled = true;

    }else if(valor === 'abusoPresente'){
        saveChild += 3;

        btnAbusoPres.disabled = true;
        btnAbusoAus.disabled = true;

    }else if(valor === 'abusoAusente'){
        saveChild += 0;

        btnAbusoPres.disabled = true;
        btnAbusoAus.disabled = true;
    }
}

//-------------------------ASIGNACION DE VALOR A PEDCTAS SEGUN VALOR ESCALAS------------------------//
function valorTriangulo(){
    if(trianguloAparienciaInteraccion == true && trianguloAparienciaTono == true && trianguloAParienciaMirada == true && trianguloAparienciaLlanto == true){
        trianguloAPariencia = true;
    }else{
        trianguloAPariencia = false;
    }
}

function valorTrianguloPEDCTAS(){
    if(trianguloAPariencia == true && trianguloRespiracion == true && trianguloCirculacion == true){
        paedctasTriangulo = 'azul';
    }else if(trianguloAPariencia == false && trianguloRespiracion == true && trianguloCirculacion == true){
        paedctasTriangulo = 'verde';
    }else if(trianguloAPariencia == true && trianguloRespiracion == false && trianguloCirculacion == true){
        paedctasTriangulo = 'amarillo';
    }else if(trianguloAPariencia == false && trianguloRespiracion == false && trianguloCirculacion == true){
        paedctasTriangulo = 'naranja';
    }else if(trianguloApariencia == true && trianguloRespiracion == true && trianguloCirculacion == false){
        paedctasTriangulo = 'amarillo';
    }else if(trianguloApariencia == false && trianguloRespiracion == true && trianguloCirculacion == false){
        paedctasTriangulo = 'naranja';
    }else if(trianguloApariencia == false && trianguloRespiracion == false && trianguloCirculacion == false){
        paedctasTriangulo = 'rojo';
    }
}

function valorAlertaPEDCTAS(){
    if(sistemaAlertaTemprana == 0){
        paedctasAlerta = 'azul';
    }else if(sistemaAlertaTemprana == 1){
        paedctasAlerta = 'verde';
    }else if(sistemaAlertaTemprana == 2){
        paedctasAlerta = 'amarillo';
    }else if(sistemaAlertaTemprana == 3){
        paedctasAlerta = 'naranja';
    }else if(sistemaAlertaTemprana >3){
        paedctasAlerta = 'rojo';
    }
}

//No definitivo; puede que haya cambio en la logica con la que se mide esta escala.
function valorChildPEDCTAS(){
    if(saveChild == 0){
        paedctasChild = 'azul';
    }else if(saveChild == 3){
        paedctasChild = 'verde';
    }else if(saveChild == 6){
        paedctasChild = 'amarillo';
    }else if(saveChild == 9){
        paedctasChild = 'naranja';
    }else if(saveChild >9){
        paedctasChild = 'rojo';
    }
}


//------------------ASIGNAR COLOR SEGUN GRAVEDAD DEL PACIENTE-----------------//
//Elementos de la hoja HTML para agregar el resultado
let contenedorResultado = document.getElementById('resultado-triaje');
let elementoResultado = document.createElement('p');

//Variables con codigos
const codigos = {
    'AZUL':'V',
    'VERDE':'IV',
    'AMARILLO':'III',
    'NARANJA':'II',
    'ROJO':'I'
}

paedctasTriangulo = 'azul';
paedctasAlerta =  'azul' ;
paedctasChild = 'azul';

function resultadoTriaje(){
    if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'azul' && paedctasChild == 'azul'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);

    }else if(paedctasTriangulo == 'azul' && paedctasAlerta == 'azul' && paedctasChild == 'verde'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);

    }else if(paedctasTriangulo == 'azul' && paedctasAlerta == 'azul' && paedctasChild == 'amarillo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta == 'azul' && paedctasChild ==  'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'azul' && paedctasChild ==  'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'verde' && paedctasChild == 'verde'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'verde' && paedctasChild == 'amarillo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'verde' && paedctasChild == 'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'verde' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'amarillo' && paedctasChild == 'amarillo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'amarillo' && paedctasChild == 'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'amarillo' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'naranja' && paedctasChild == 'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'naranja' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'azul' && paedctasAlerta ==  'rojo' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'verde' && paedctasChild == 'verde'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);

    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'verde' && paedctasChild == 'amarillo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'verde' && paedctasChild == 'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'verde' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'amarillo' && paedctasChild == 'amarillo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'amarillo' && paedctasChild == 'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'amarillo' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'naranja' && paedctasChild == 'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'naranja' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'verde' && paedctasAlerta ==  'rojo' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'amarillo' && paedctasAlerta ==  'amarillo' && paedctasChild == 'amarillo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
        
    }else if(paedctasTriangulo == 'amarillo' && paedctasAlerta ==  'amarillo' && paedctasChild == 'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'amarillo' && paedctasAlerta ==  'amarillo' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'amarillo' && paedctasAlerta ==  'naranja' && paedctasChild == 'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'amarillo' && paedctasAlerta ==  'naranja' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'amarillo' && paedctasAlerta ==  'rojo' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'naranja' && paedctasAlerta ==  'naranja' && paedctasChild == 'naranja'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'naranja' && paedctasAlerta ==  'naranja' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'naranja' && paedctasAlerta ==  'rojo' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
        CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

        Valores segun paedCTAS: ${codigos.AZUL}

        Valores en Escalas Individuales:
            -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                - Interaccion {trianguloAparienciaInteraccion}
                - Tono {trianguloAparienciaTono}
                - Mirada {trianguloAParienciaMirada}
                - Llanto {trianguloAparienciaLlanto}
            -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
            -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

            -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

            -Save A Child: {saveChild}
    `;
    contenedorResultado.appendChild(elementoResultado);
    
    }else if(paedctasTriangulo == 'rojo' && paedctasAlerta ==  'rojo' && paedctasChild == 'rojo'){
        elementoResultado.innerText = `
            CODIGO OBTENIDO: ${Object.keys(codigos)[0]}

            Valores segun paedCTAS: ${codigos.AZUL}

            Valores en Escalas Individuales:
                -Triangulo Evaluacion Pediatrica Apariencia: {trianguloApariencia}
                    - Interaccion {trianguloAparienciaInteraccion}
                    - Tono {trianguloAparienciaTono}
                    - Mirada {trianguloAParienciaMirada}
                    - Llanto {trianguloAparienciaLlanto}
                -Triangulo Evaluacion Pediatrica Respiratorio: {trianguloRespiracion}
                -Triangulo Evaluacion Pediatrica Circulatorio: {trianguloCirculacion}

                -Sistema de Alerta Temprana: {sistemaAlertaTemprana}

                -Save A Child: {saveChild}
        `;
        contenedorResultado.appendChild(elementoResultado);
          
    }
}

