export default class Cl_empresa{
    constructor(){
        this.contObrero = 0;
        this.contAdmin = 0;
        this.acumSObrero = 0;
        this.acumSAdmin = 0;
    }

    procesarPersonal(p){
        //Contar personal obrero y administrativo, y acumular el sueldo correspondiente
        if (p.tipo === "OBRERO"){
            this.contObrero++;
            this.acumSObrero += p.salario;
        } else if (p.tipo === "ADMINISTRATIVO"){
            this.contAdmin++;
            this.acumSAdmin += p.salario;
        }
    }

    mostrarMontoPagoObrero(){
        return this.acumSObrero;
    }

    mostrarMontoPagoAdmin(){
        return this.acumSAdmin;
    }

    mostrarCantObrero(){
        return this.contObrero;
    }

    mostrarCantAdmin(){
        return this.contAdmin;
    }

    calcPromedioPagoObrero(){
        if (this.contObrero > 0)
            return this.acumSObrero / this.contObrero;
        else
            return 0;
    }

    calcPromedioPagoAdmin(){
        if (this.contAdmin > 0)
            return this.acumSAdmin / this.contAdmin;
        else
            return 0;
    }
}