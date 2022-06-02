//Crear diferentes utilidades y juegos en esta calculadora de armónicas:
//1. Que nos diga qué notas, y en qué celdas, tiene la tonalidad de armónica que elija el usuario
//2. Que nos diga en qué celda, de una armónica seleccionada por el usuario, se encuentra una nota seleccionada por el usuario
//3. Que nos diga qué nota ocupa una celda seleccionada por el usuario, en una armónica seleccionada por el usuario
//4. Que nos pregunte en qué celda está una nota al azar, en una armónica al azar
//5. Que nos pregunte qué celda ocupa una nota al azar en una armónica al azar


const armonicas = ["G","Ab","A","Bb","B","C","Db","D","Eb","E","F"]
const celdas = ["1S","1b","1A","1ob","2S","2bb","2b","2A","3S","3bbb","3bb","3b","3A","4S","4b","4A","4ob","5S","5A","5ob","6S","6b","6A","6ob","7A","7S","7od","8A","8b","8S","9A","9b","9S","9od","10A","10bb","10b","10S","10od"]
const notas = ["G3","G#/Ab3","A3","A#/Bb3","B3","C4","C#/Db4","D4","D#/Eb4","E4","F4","F#/Gb4","G4","G#/Ab4","A4","A#/Bb4","B4","C5","C#/Db5","D5","D#/Eb5","E5","F5","F#/Gb5","G5","G#/Ab5","A5","A#/Bb5","B5","C6","C#/Db6","D6","D#/Eb6","E6","F6","F#/Gb6","G6","G#/Ab6","A6","A#/Bb6","B6","C7","C#/Db7","D7","D#/Eb7","E7","F7","F#/Gb7"]

// let notasArmoG = [];
// let notasArmoAb = [];
// let notasArmoA = [];
// let notasArmoBb = [];
// let notasArmoB = [];
// let notasArmoC = [];
// let notasArmoDb = [];
// let notasArmoD = [];
// let notasArmoEb = [];
// let notasArmoE = [];
// let notasArmoF = [];


for(let i=0;i<armonicas.length;i++){
    console.log("Tonalidades standard de armónica:",armonicas[i]);
}

for(let i=0;i<celdas.length;i++){
    console.log("Celdas de una armónica diatónica:",celdas[i]);
}

for(let i=0;i<notas.length;i++){
    console.log("Notas disponibles en armónicas standard:",notas[i]);
}

let tonoSeleccionado = 0

    

while(tonoSeleccionado==0){
    
    tonoSeleccionado = Number(prompt(`¿Qué tono de armónica te gustaría saber? 1.G 2.Ab 3.A 4.Bb 5.B 6.C 7.Db 8.D 9.Eb 10.E 11.F 12.SALIR`));
    
    switch(tonoSeleccionado){
        
        case 1:
            let notasArmoG = notas.slice(0,38);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoG);
            tonoSeleccionado=0;
            break;

        case 2:
            let notasArmoAb = notas.slice(1,39);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoAb);
            tonoSeleccionado=0;
            break;

        case 3:
            let notasArmoA = notas.slice(2,40);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoA);
            tonoSeleccionado=0;
            break;

        case 4:
            let notasArmoBb = notas.slice(3,41);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoBb);
            tonoSeleccionado=0;
            break;

        case 5:
            let notasArmoB = notas.slice(4,42);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoB);
            tonoSeleccionado=0;
            break;

        case 6:
            let notasArmoC = notas.slice(5,43);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoC);
            tonoSeleccionado=0;
            break;

        case 7:
            let notasArmoDb = notas.slice(6,44);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoDb);
            tonoSeleccionado=0;
            break;
        
        case 8:
            let notasArmoD = notas.slice(7,45);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoD);
            tonoSeleccionado=0;
            break;

        case 9:
            let notasArmoEb = notas.slice(8,46);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoEb);
            tonoSeleccionado=0;
            break;
        
        case 10:
            let notasArmoE = notas.slice(9,47);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoE);
            tonoSeleccionado=0;
            break;

        case 11:
            let notasArmoF = notas.slice(10,48);
            alert("La armónica seleccionada tiene este rango de notas: "+notasArmoF);
            tonoSeleccionado=0;
            break;

        case 12:
            break;

        default:
            alert("Elegí una opción válida");
            tonoSeleccionado=0;
    }
}


