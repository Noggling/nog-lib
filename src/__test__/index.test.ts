import { nogLib } from '../index';

describe('index.ts', () => {
    it('nogLib - should return string', () => {
        const text = nogLib('Hello World');
        expect(text).toEqual('Hello World');
    });
});
