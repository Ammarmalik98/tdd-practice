import { describe, test, expect } from 'vitest';
import { subtract } from './subtract';

describe('subtract function', () => {
    test('subtracts 5 - 3 to equal 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });
    test('subtracts 10 - 20 to equal -10', () => {
        expect(subtract(10, 20)).toBe(-10);
    });
});
