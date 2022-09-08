class PowerRanger{
    
    color = "color por defecto";

    /**
     * Lo que sucede cuando el PowerRanger se encuentra con alguien
     * @param {PowerRanger} alguien con quien se encuentra el PowerRanger
     */
    seEncuentraCon(alguien){
        console.log("Hola power ranger",alguien.deQueColorSos(),"como estas?!");
    }

    /**
     * Devuelve el color del PowerRanger
     * @returns el color del PowerRanger
     */
    deQueColorSos(){
        return this.color;
    }

    /**
     * Modifica el color del PowerRanger
     * @param {String} colorAsignado al PowerRanger
     */
    ahoraSosDeColor(colorAsignado){
        this.color = colorAsignado;
    }
}

module.exports = PowerRanger;