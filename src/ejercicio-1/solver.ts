import { Strategy } from "./strategy";

/**
 * Clase que simboliza un problema a resolver
 */
export class Solver {

  /**
   * Constructor de la clase
   * @param data array que se quiere ordenar
   * @param strategy algoritmo que se quiere emplear
   */
  constructor(private data: number[], private strategy: Strategy) {
  }

  /**
   * Método setter que establece el algoritmo que se quiere implementar
   * @param strategy algoritmo que se quiere emplear
   */
  setStrategy(strategy: Strategy): Strategy {
    this.strategy = strategy;
    return this.strategy;
  }

  /**
   * Método que ejecuta el algoritmo de ordenación
   */
  logic(): number[] {
    this.strategy.execute(this.data);
    return this.data;
  }

  /**
   * Método getter que devuelve el array
   */
  get Data() {
    return this.data;
  }

  setData(array: number[]) {
    this.data = array;
  }
}
