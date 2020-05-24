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

function assertAlgo(algo) {
  if (!['cosine_sim', 'leven'].includes(algo)) {
    throw new Error('algo can be any one of the following: [cosine_sim, leven]');
  }
}

module.exports = function (a, b, algo = 'cosine_sim') {
  assertString(a);
  assertString(b);
  assertAlgo(algo);

  let confidence = 0;

  if (algo === 'cosine_sim') {
    confidence = cosineSimilarity(normalizeString(a), normalizeString(b));
  } else {
    confidence = 100;
  }

  return {
    confidence,
    algo,
    percentage() {
      return Number((confidence * 100).toFixed(2));
    }
  }
}
