import leven from 'leven';

export default function (a, b) {
  const len = Math.max(a.length, b.length);
  const t1 = performance.now();
  const editDistance = leven(a, b);
  const t2 = performance.now();
  const confidence = Number(((len - editDistance) / len).toFixed(2));

  return {
    confidence,
    algo: 'leven',
    executionTime: `${t2 - t1}ms`,
    percentage() {
      return Number((confidence * 100).toFixed(2));
    },
  };
}
