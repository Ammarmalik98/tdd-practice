import { describe, test, expect } from 'vitest';
import { isPalindrome } from './isPalindrome';

describe('isPalindrome function', () => {
    test('racecar is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });
    test('hello is not a palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    });
});
