import leven from '../src/algos/leven';

describe('text similarity analysis test', () => {
  const stringA = 'Julie loves me more than Linda loves me';
  const stringB = 'Jane likes me more than Julie loves me';

  it('should have the following proerties in results', () => {
    expect(Object.keys(leven(stringA, stringB))).toEqual([
      'confidence',
      'algo',
      'executionTime',
      'percentage',
    ]);
  });

  it('should have algo as leven', () => {
    expect(leven(stringA, stringB).algo).toEqual('leven');
  });

  it('should compute minimum edit distance between two strings', () => {
    expect(leven(stringA, stringB).percentage()).toEqual(74);
  });
});
