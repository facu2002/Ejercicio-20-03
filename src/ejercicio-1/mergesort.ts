import { Strategy } from './strategy';


/**
 * Clase que implementa el algoritmo MergeSort
 */
export class MergeSort implements Strategy {

  /**
   * Método que ejecuta y ordena el array con el algoritmo MergeSort
   * @param data array que se quiere ordenar
   * @returns array ordenado con el algoritmo MergeSort
   */
  execute(data: number[]): number[] {
    return this.mergeSort(data);
  }

  /**
   * Método que ordena el array con el algoritmo MergeSort
   * @param data array que se quiere ordenar
   * @returns el array ordenado
   */
  mergeSort(array: number[]): number[] {
    if (array.length < 2) {
      return array;
    }
    const mitad = Math.floor(array.length / 2);
    const left = array.slice(0, mitad);
    const right = array.slice(mitad);
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  /**
   * Método que mezcla dos arrays ordenados
   * @param left parte izquierda del array
   * @param right parte derecha del array
   * @returns array ordenado
   */
  merge(left:number[], right:number[]):number[]{
    const resultado: number[] = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        resultado.push(left[i]);
        i++;
      } else {
        resultado.push(right[j]);
        j++;
      }
    }
    return resultado.concat(left.slice(i)).concat(right.slice(j));
  }
}

