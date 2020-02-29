module.exports = {
    /* 
* @author Luis Sandoval, Julio Nieblas, Jose Arce, fernando Tresierras, oswaldo Caastro
*/

/* 
* En esta seccion se utiliza una clase enum para solo enumerar el sexo de las personas
*/
    get HOMBRE(){ return "Hombre"; },
    get MUJER(){ return "Mujer"; },
    get HELICOPTERODEATAQUE(){ return "Helicoptero de ataque";},
    getAll(){ 
        return [ this.HOMBRE, this.MUJER, this.HELICOPTERODEATAQUE ];
    }
};