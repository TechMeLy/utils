import type { MergeDeep } from "@techmely/types";
import { isArray } from "./isArray";
import { isObject } from "./isObject";

/**
 * @description Deep merge Object
 * This will mutate the old object, be careful
 * {@link https://github.com/antfu/utils/blob/1e66c6f940/src/object.ts#L75#L102}
 * @template T, S
 * @param {T} target - The target object
 * @param {...S[]} sources - The sources will merge
 * @returns {MergeDeep<T, S>} the object after merge
 */
export function mergeDeep<T extends Record<string, any>, S extends Record<string, any>>(
  target: T,
  ...sources: S[]
): MergeDeep<T, S> {
  if (sources.length === 0) {
    return target as any;
  }

  const source = sources.shift();
  if (source === undefined) {
    return target as any;
  }

  if (isMergeableObject(target) && isMergeableObject(source)) {
    const sourceKeys = Object.keys(source);

    for (const key of sourceKeys) {
      if (isMergeableObject(source[key])) {
        if (!target[key]) {
          // @ts-expect-error I do not know how to fix this
          target[key] = {};
        }

        if (isMergeableObject(target[key])) {
          mergeDeep(target[key], source[key]);
        } else {
          // @ts-expect-error I do not know how to fix this
          target[key] = source[key];
        }
      } else {
        // @ts-expect-error I do not know how to fix this
        target[key] = source[key];
      }
    }
  }

  return mergeDeep(target, ...sources);
}

/**
 * @param {any} item - the input check
 * @returns {boolean} - value
 */
function isMergeableObject(item: any): item is Record<string, any> {
  return isObject(item) && !isArray(item);
}
