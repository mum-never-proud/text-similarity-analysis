import leven from 'leven';

export default function (a, b) {
  const len = Math.max(a.length, b.length);
  const t1 = performance.now();
  const confidence = Number(((len - leven(a, b)) / len).toFixed(2));
  const t2 = performance.now();

  return {
    confidence,
    algo: 'leven',
    executionTime: `${t2 - t1}ms`,
    percentage() {
      return Number((confidence * 100).toFixed(2));
    },
  };
}
