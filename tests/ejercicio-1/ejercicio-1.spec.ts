import "mocha";
import { expect } from "chai";
import { Solver } from "../../src/ejercicio-1/solver";
import { BubbleSort } from "../../src/ejercicio-1/bubblesort";
import { MergeSort } from "../../src/ejercicio-1/mergesort";

const mySolver1 = new Solver([4, 7, 8, 1, 2, 9, 3, 5, 6], new BubbleSort());

describe('Clase Solver', () => {
  it('Constructor de la clase Solver', () => {
    expect(mySolver1).not.to.be.equal(null);
  });
  it('SetStrategy : setter que establece el algoritmo que se quiere ejecutar', () => {
    expect(mySolver1.setStrategy(new BubbleSort())).to.be.an.instanceOf(BubbleSort);
  });
  it('logic : método que ejecuta el algoritmo', () => {
    mySolver1.logic();
    expect(mySolver1.Data).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('Data : getter que devuelve el array ordenado', () => {
    expect(mySolver1.Data).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});



describe('Clase Solver', () => {
  mySolver1.setData([4, 7, 8, 1, 2, 9, 3, 5, 6]);
  it('SetStrategy : setter que establece el algoritmo que se quiere ejecutar', () => {
    expect(mySolver1.setStrategy(new MergeSort())).to.be.an.instanceOf(MergeSort);
  });
  it('logic : método que ejecuta el algoritmo', () => {
    mySolver1.logic();
    expect(mySolver1.Data).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('Data : getter que devuelve el array ordenado', () => {
    expect(mySolver1.Data).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
