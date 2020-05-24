import sw from 'stopword';
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

  sw.removeStopwords(words).forEach(word => dict[word] = true);

  return dict;
}

module.exports = function (a, b) {
  const dict = createDictionary(...a.toLowerCase().split(' '), ...b.toLowerCase().split(' ')),
    frequencyA = wordFrequencies(a.toLowerCase(), dict).values(),
    frequencyB = wordFrequencies(b.toLowerCase(), dict).values();

  return cosineSimilarity(frequencyA, frequencyB);
}
