import cosineSimilarity from '../src/algos/cosine-similarity';

describe('text similarity analysis test', () => {
  const stringA = 'Julie loves me more than Linda loves me';
  const stringB = 'Jane likes me more than Julie loves me';

  it('should have the following proerties in results', () => {
    expect(Object.keys(cosineSimilarity(stringA, stringB))).toEqual([
      'confidence',
      'algo',
      'executionTime',
      'percentage',
    ]);
  });

  it('should have algo as cosine_sim', () => {
    expect(cosineSimilarity(stringA, stringB).algo).toEqual('cosine_sim');
  });

  it('should compute cosine similarity between two strings', () => {
    expect(cosineSimilarity(stringA, stringB).percentage()).toEqual(82.2);
  });
});
