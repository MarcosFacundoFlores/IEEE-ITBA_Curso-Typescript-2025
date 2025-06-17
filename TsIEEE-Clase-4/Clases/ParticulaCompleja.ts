/**
 * Representa una coordenada en un sistema de coordenadas cartesianas tridimensional.
 */
export class Coordenada {
    private x: number;
    private y: number;
    private z: number;

    /**
     * Crea una nueva coordenada en el espacio.
     * @param x Coordenada en el eje x.
     * @param y Coordenada en el eje y.
     * @param z Coordenada en el eje z.
     */
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Calcula el módulo de la coordenada.
     * @returns El módulo de la coordenada.
     */
    modulo(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }

    /**
     * Calcula la distancia Manhattan desde el origen de coordenadas hasta la coordenada.
     * @returns La distancia Manhattan.
     */
    distanciaManhattan() {
        return this.x + this.y + this.z;
    }

    /**
     * Calcula la diferencia entre dos coordenadas.
     * @param coordenada La coordenada a restar.
     * @returns La coordenada resultante de la resta.
     */
    diferencia(coordenada: Coordenada): Coordenada {
        return new Coordenada(
            this.x - coordenada.x,
            this.y - coordenada.y,
            this.z - coordenada.z,
        );
    }

    /**
     * Calcula la división de la coordenada por un número.
     * @param cantidad El número por el que se divide la coordenada.
     * @returns La coordenada resultante de la división.
     */
    divisionPorMagnitud(cantidad: number): Coordenada {
        return new Coordenada(
            this.x / cantidad,
            this.y / cantidad,
            this.z / cantidad,
        );
    }

    /**
     * Calcula la división punto a punto entre dos coordenadas.
     * @param coordenada La coordenada por la que se divide.
     * @returns La coordenada resultante de la división.
     */
    divisionPuntoAPunto(coordenada: Coordenada): Coordenada {
        return new Coordenada(
            this.x / coordenada.x,
            this.y / coordenada.y,
            this.z / coordenada.z,
        );
    }
}

/**
 * Clase que representa una partícula con posición, velocidad y masa.
 */
export class ParticulaCompleja {
    private posicion: Coordenada;
    private velocidad: Coordenada;
    private masa: number;

    /**
     * Crea una instancia de Particula.
     * @param posicionInicial Coordenada que representa la posición inicial de la partícula.
     * @param velocidadInicial Coordenada que representa la velocidad inicial de la partícula.
     * @param masa Número que representa la masa de la partícula.
     */
    constructor(
        posicionInicial: Coordenada,
        velocidadInicial: Coordenada,
        masa: number,
    ) {
        this.posicion = posicionInicial;
        this.velocidad = velocidadInicial;
        this.masa = masa;
    }

    /**
     * Modifica la velocidad de la partícula y calcula su aceleración.
     * @param nuevaVelocidad Coordenada que representa la nueva velocidad de la partícula.
     * @param tiempoDeAceleracion Número que representa el tiempo en el que se produce la aceleración.
     * @returns Coordenada que representa la aceleración de la partícula.
     */
    modificarVelocidad(
        nuevaVelocidad: Coordenada,
        tiempoDeAceleracion: number,
    ): Coordenada {
        const cambioVelocidad = nuevaVelocidad.diferencia(this.velocidad);
        this.velocidad = nuevaVelocidad;
        const aceleracion =
            cambioVelocidad.divisionPorMagnitud(tiempoDeAceleracion);
        return aceleracion;
    }

    /**
     * Calcula la inercia de la partícula.
     * @returns Número que representa la inercia de la partícula.
     */
    calcularInercia(): number {
        return this.posicion.modulo() ** 2 * this.masa;
    }

    /**
     * Calcula el momento de la partícula.
     * @returns Número que representa el momento de la partícula.
     */
    calcularMomento(): number {
        return this.masa * this.posicion.modulo() * this.velocidad.modulo();
    }

    /**
     * Mueve la partícula hacia una nueva posición y calcula el tiempo que tarda en recorrer la distancia.
     * @param nuevaPosicion Coordenada que representa la nueva posición de la partícula.
     * @returns Número que representa el tiempo que tarda la partícula en recorrer la distancia hasta la nueva posición.
     */
    moverHacia(nuevaPosicion: Coordenada): number {
        const distanciaARecorrer = nuevaPosicion.diferencia(this.posicion);
        this.posicion = nuevaPosicion;
        const tiempo = distanciaARecorrer.divisionPuntoAPunto(this.velocidad);
        return tiempo.distanciaManhattan();
    }

    /**
     * Calcula la energía cinética de la partícula.
     * @returns Número que representa la energía cinética de la partícula.
     */
    energiaCinetica(): number {
        return (1 / 2) * this.masa * this.velocidad.modulo() ** 2;
    }
}
