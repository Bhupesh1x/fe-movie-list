export function once<T extends (...args: any[]) => any>(func: T): T {
  let called = false;
  let result: ReturnType<T>;

  return function (...args: Parameters<T>): ReturnType<T> | undefined {
    if (!called) {
      called = true;
      result = func(...args);
    }
    return result;
  } as T;
}
