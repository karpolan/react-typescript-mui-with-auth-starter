import createCache, { EmotionCache } from '@emotion/cache';

/**
 * Creates an emotion cache with .prepend option set to true.
 * This moves MUI styles to the top of the <head> so they're loaded first.
 * It allows overriding MUI styles with other styling solutions, like CSS modules.
 * @returns {EmotionCache}
 */
export function createEmotionCache(): EmotionCache {
  return createCache({ key: 'css', prepend: true });
}

export default createEmotionCache;
