import { describe, test, expect } from 'vitest';
import { reverseString } from './reverseString';

describe('reverseString function', () => {
    test('reverses hello', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
    test('reverses 123', () => {
        expect(reverseString('123')).toBe('321');
    });
});
