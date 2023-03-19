import "mocha";
import { expect } from "chai";
import { hello } from "../../src/ejercicio-1/ejercicio-1";


describe('hello function', () => {
  it('should return Hello World!', () => {
    expect(hello()).to.be.equal('Hello World!');
  });
});