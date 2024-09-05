/* eslint consistent-return: off */
/* eslint @typescript-eslint/no-unused-vars: off */
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

const tSpy = (_: unknown, parameters: string) => {
  if (parameters) {
    return parameters;
  }
  jest.fn(str => str);
};

const changeLanguageSpy = jest.fn((lng: string) => new Promise(() => {}));
const useTranslationSpy = useTranslation as jest.Mock;

useTranslationSpy.mockReturnValue({
  i18n: {
    changeLanguage: changeLanguageSpy,
    language: 'en',
  },
  t: tSpy,
});
