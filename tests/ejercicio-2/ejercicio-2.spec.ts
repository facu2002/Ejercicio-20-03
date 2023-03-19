import "mocha";
import { expect } from "chai";
import { hola } from "../../src/ejercicio-2/ejercicio-2";

describe('hola function', () => {
  it('should return Hola Mundo!', () => {
    expect(hola()).to.be.equal('Hola Mundo!');
  });
});