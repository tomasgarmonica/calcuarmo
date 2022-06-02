//nombre de usuario
//edad
//lugar de residencia
//qué armónica usa

//promedio de edad
//lugar con más usuarios
//armónica menos usada

let promedioDeEdad = 0;
let armonicaMenosUsada = "";
let totalEdad = 0;
let argentina = 0;
let restoDelMundo = 0;
let armoDiat = 0;
let armoCrom = 0;
let armoTrem = 0;
let armonicaUsada = 0;
let resultadoPais = "";
let resultadoArmo = "";

for (numUsuario = 1; numUsuario <=5; numUsuario ++){

        let nombreUsuario = prompt(`Ingresa tu nombre`);

        let edadUsuario = Number(prompt(`Ingresá tu edad`));

        let lugarResidencia = Number(prompt(`¿De dónde te conectás? 1.Argentina - 2.Resto del mundo`));


        totalEdad = edadUsuario + totalEdad;

    if(lugarResidencia==1){
        argentina = argentina+1;
    }
    else{
        restoDelMundo = restoDelMundo+1;
    }
    //alert(`En Argentina hay ${argentina} y Resto del mundo ${restoDelMundo}`);

    armonicaUsada=0;

    while (armonicaUsada==0){

        armonicaUsada = Number(prompt(`¿Qué armónica usás? 1.Diatónica - 2.Cromática - 3.Trémolo`));

        switch(armonicaUsada){

            case 1:
                armoDiat = armoDiat+1;
            break;

            case 2:
                armoCrom = armoCrom+1;
            break;

            case 3:
                armoTrem = armoTrem+1;
            break;

            default:
                alert(`Elegí una opción válida`);
                armonicaUsada=0;

        }
    }
    //alert(`Diatonica ${armoDiat} Cromatica${armoCrom} Trémolo${armoTrem}`);
    

}

promedioDeEdad = totalEdad/5;

if(argentina>restoDelMundo){
    resultadoPais = "Argentina";
}
else{
    resultadoPais = "Resto del mundo";
}

//alert("el lugar más concurrido es "+ resultadoPais);




if(armoDiat<armoCrom && armoDiat<armoTrem){
        resultadoArmo = "Diatónica";
        //alert(`La armónica menos usada es diatónica`);
}

else{
    if(armoCrom<armoTrem && armoCrom<armoDiat){
        resultadoArmo = "Cromática";
    }
    else{
        resultadoArmo = "Trémolo";
    }
}

//alert("La menos usada es "+resultadoArmo);

alert(`El promedio de edad de tus usuarios es: ${promedioDeEdad} Tenés más usuarios en: ${resultadoPais} La armónica que menos tocan es: ${resultadoArmo}`);