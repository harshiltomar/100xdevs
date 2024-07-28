import {describe, expect, test} from '@jest/globals';
import { multiply, sum } from '../src';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('multiple module', ()=> {
    test('multiplt 1*2 equal to 2', () => {
        expect(multiply(1,2)).toBe(2);
    })
})