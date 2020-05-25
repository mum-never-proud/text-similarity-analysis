import tsa from '../text-similarity-analysis';

/* eslint-disable no-undef */
describe('text similarity analysis test', () => {
  it('should throw TypeError when one of the first two params is not a string', () => {
    expect(() => tsa()).toThrow(TypeError);
    expect(() => tsa([], 'monkey')).toThrow(TypeError);
  });

  it('should throw error when invalid algo is provided', () => {
    expect(() => tsa('monkey', 'money', 'blah').algo).toThrow(Error);
  });

  it('should compute cosine similarity by default', () => {
    expect(tsa('monkey', 'money').algo).toEqual('cosine_sim');
  });

  it('should computed minimum edit distance when algo is level', () => {
    expect(tsa('monkey', 'money', 'leven').algo).toEqual('leven');
  });
});
