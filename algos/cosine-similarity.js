import cosineSimilarity from 'cosine-similarity';

function wordFrequencies(string = '', dict) {
  const frequencies = {},
    words = string.split(' ');

  Object.keys(dict).forEach(key => {
    frequencies[key] = 0;

    words.forEach(word => {
      if (word === key) {
        frequencies[key]++;
      }
    });
  });

  return {
    values() {
      return Object.values(frequencies);
    }
  };
}

function createDictionary(...words) {
  const dict = {};

  words.forEach(word => dict[word] = true);

  return dict;
}

export default function (a, b) {
  const dict = createDictionary(...a.split(' '), ...b.split(' ')),
    frequencyA = wordFrequencies(a, dict).values(),
    frequencyB = wordFrequencies(b, dict).values();

  return cosineSimilarity(frequencyA, frequencyB);
}
