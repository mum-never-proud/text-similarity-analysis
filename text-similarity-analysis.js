import sw from 'stopword';
import cosineSimilarity from './algos/cosine-similarity';

function normalizeString(string) {
  return sw.removeStopwords(string.split(' ')).join(' ').toLowerCase();
}

function assertString(input) {
  if (typeof input !== 'string') {
    throw new TypeError('similarity can be computed only between two strings');
  }
}

module.exports = function (a, b) {
  assertString(a);
  assertString(b);

  return cosineSimilarity(normalizeString(a), normalizeString(b));
}
