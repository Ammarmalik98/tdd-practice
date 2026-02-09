import { describe, test, expect } from 'vitest';
import { divide } from './divide';

describe('divide function', () => {
    test('divides 6 by 2 to equal 3', () => {
        expect(divide(6, 2)).toBe(3);
    });
    test('returns null when dividing by 0', () => {
        expect(divide(5, 0)).toBe(null);
    });
});
