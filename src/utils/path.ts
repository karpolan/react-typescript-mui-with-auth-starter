/**
 * Checks last char of the string is it a slash or not.
 * @param {string} path - the path to check.
 * @returns {boolean} true if last char is a slash.
 */
export function hasTrailingSlash(path: string): boolean {
  return (
    typeof path === 'string' && (path?.charAt(path?.length - 1) === '/' || path?.charAt(path?.length - 1) === '\\')
  );
}

/**
 * Adds a slash to the path if it doesn't have one.
 */
export function addTrailingSlash(path: string): string {
  return hasTrailingSlash(path) ? path : path + '/';
}

/**
 * Removes ending slash from the path if it has one.
 */
export function removeTrailingSlash(path: string): string {
  return hasTrailingSlash(path) ? path.slice(0, -1) : path;
}
