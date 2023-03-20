
/**
 * Interfaz que debe implementar cada clase que implemente un algoritmo de ordenación
 * Cuenta con el método execute que recibe el vector a ordenar
 */
export interface Strategy {
    execute(data: number[]): number[];
  }
  