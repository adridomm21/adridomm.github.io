const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1500;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(PESO) {
    let resultado = 0;
    if (PESO>0 && PESO<=10) { 
        resultado = PESO * 100;
    } else if (PESO<=20) {
        resultado = (10*100)+((PESO-10)*50);
    } else if (PESO<=30){
        resultado =(10*100)+(10*50)+((PESO-20)*20);
    } else if (PESO>30){
        resultado = ((PESO*4)+7)/(PESO+90);
    }   
    return resultado; 
}
