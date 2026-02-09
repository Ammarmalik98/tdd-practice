import { describe, test, expect } from 'vitest';
import { findMax } from './findMax';

describe('findMax function', () => {
    test('finds max in [1, 2, 3]', () => {
        expect(findMax([1, 2, 3])).toBe(3);
    });
    test('finds max in [-1, -5, -2]', () => {
        expect(findMax([-1, -5, -2])).toBe(-1);
    });
});
