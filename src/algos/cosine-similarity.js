import cosineSimilarity from 'cosine-similarity';

function wordFrequencies(string = '', dict) {
  const frequencies = {};
  const words = string.split(' ');

  Object.keys(dict).forEach((key) => {
    frequencies[key] = 0;

    words.forEach((word) => {
      if (word === key) {
        frequencies[key]++;
      }
    });
  });

  return {
    values() {
      return Object.values(frequencies);
    },
  };
}

function createDictionary(...words) {
  const dict = {};

  // eslint-disable-next-line no-return-assign
  words.forEach((word) => dict[word] = true);

  return dict;
}

export default function (a, b) {
  const dict = createDictionary(...a.split(' '), ...b.split(' '));
  const frequencyA = wordFrequencies(a, dict).values();
  const frequencyB = wordFrequencies(b, dict).values();

  const t1 = performance.now();
  const confidence = cosineSimilarity(frequencyA, frequencyB);
  const t2 = performance.now();

  return {
    confidence,
    algo: 'cosine_sim',
    executionTime: `${t2 - t1}ms`,
    percentage() {
      return Number((confidence * 100).toFixed(2));
    },
  };
}
