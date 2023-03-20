import { Strategy } from './strategy';


/**
 * Clase que implementa el algoritmo BubbleSort
 */
export class BubbleSort implements Strategy {

  /**
   * Método que ordena el array con el algoritmo BubbleSort
   * @param data array que se quiere ordenar
   * @returns array ordenado con el algoritmo BubbleSort
   */
  execute(data: number[]): number[] {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
          if (data[j] > data[j + 1]) {
              [data[j], data[j + 1]] = [data[j + 1], data[j]];
          }
      }
    }
    return data;
  }
}
