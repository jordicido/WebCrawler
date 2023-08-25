const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test('Url with http:// return it normalized', () => {
    expect(normalizeURL('http://boot.dev')).toBe('boot.dev');
});

test('Url with http://  and a final / return it normalized', () => {
    expect(normalizeURL('http://boot.dev/')).toBe('boot.dev');
});

test('Url with http:// and path return it normalized', () => {
    expect(normalizeURL('http://boot.dev/web-crawler')).toBe('boot.dev/web-crawler');
});

test('Url with http:// and path and a final / return it normalized', () => {
    expect(normalizeURL('http://boot.dev/web-crawler/')).toBe('boot.dev/web-crawler');
});
