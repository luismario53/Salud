module.exports = {
    get HOMBRE(){ return "Hombre"; },
    get MUJER(){ return "Mujer"; },
    get HELICOPTERODEATAQUE(){ return "Helicoptero de ataque";},
    getAll(){
        return [ this.HOMBRE, this.MUJER, this.HELICOPTERODEATAQUE ];
    }
};