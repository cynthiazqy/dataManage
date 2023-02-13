/**
 * @description 公共方法
 * @author cynthiazqy
 */

/**
 * 将数组旋转 k 步
 * 思路：拆出k步的部分，与原arr剩余部份相连，组成新arr
 * @param arr
 * @param k
 * @returns arr
 */
const rotate = (arr: number[], k: number): number[] => {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = Math.abs(k % length);
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  const part3 = part1.concat(part2);
  return part3;
};

export { rotate };
