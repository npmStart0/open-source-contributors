import { describe, it, expect } from 'vitest';
import { en, he, dictionaries, languageDirection, LANGUAGES } from './translations';

describe('translations', () => {
  it('has the same keys in Hebrew and English', () => {
    expect(Object.keys(he).sort()).toEqual(Object.keys(en).sort());
  });

  it('has no empty translation values', () => {
    for (const lang of LANGUAGES) {
      for (const [key, value] of Object.entries(dictionaries[lang])) {
        expect(value, `${lang}.${key}`).not.toBe('');
      }
    }
  });

  it('maps Hebrew to RTL and English to LTR', () => {
    expect(languageDirection.he).toBe('rtl');
    expect(languageDirection.en).toBe('ltr');
  });

  it('interpolation placeholder exists in the count key', () => {
    expect(en['home.resultsCount']).toContain('{count}');
    expect(he['home.resultsCount']).toContain('{count}');
  });
});
