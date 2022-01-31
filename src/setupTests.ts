// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "firebase";

const defaultMediaQueriesValue = {
  default: false,
};

let mediaQueries: { [key: string]: boolean } = defaultMediaQueriesValue;

const getMediaMatches = (query: string) => {
  return mediaQueries[query] || mediaQueries.default;
};

export const setMediaMatches = (query: string, value: boolean) => {
  mediaQueries = { ...mediaQueries, [query]: value };
};

beforeEach(() => {
  mediaQueries = defaultMediaQueriesValue;
  return Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: getMediaMatches(query),
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
});
