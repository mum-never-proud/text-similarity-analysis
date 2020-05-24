import sw from 'stopword';
import cosineSimilarity from './algos/cosine-similarity';
import leven from './algos/leven';

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

// eslint-disable-next-line func-names
module.exports = function (a, b, algo = 'cosine_sim') {
  assertString(a);
  assertString(b);
  assertAlgo(algo);

  if (algo === 'cosine_sim') {
    return cosineSimilarity(normalizeString(a), normalizeString(b));
  }

  return leven(normalizeString(a), normalizeString(b));
};
