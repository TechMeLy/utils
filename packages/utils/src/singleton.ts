// Since the dev server re-requires the bundle, do some shenanigans to make
// certain things persist across that 😆
// Borrowed/modified from https://github.com/jenseng/abuse-the-platform/blob/2993a7e846c95ace693ce61626fa072174c8d9c7/app/utils/singleton.ts

export function singleton<Value>(name: string, valueFactory: () => Value): Value {
  const g = global;
  g.__singletons ??= {};
  g.__singletons[name] ??= valueFactory();
  return g.__singletons[name] as Value;
}

declare global {
  // biome-ignore lint/style/noVar: must use var here to add typing to globalThis
  var __singletons: Record<string, unknown>;
}
