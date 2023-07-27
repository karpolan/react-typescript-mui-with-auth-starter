import { IS_SERVER } from './environment';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Smartly reads value from localStorage
 */
export function localStorageGet(name: string, defaultValue: any = ''): any {
  if (IS_SERVER) {
    return defaultValue; // We don't have access to localStorage on the server
  }

  const valueFromStore = localStorage.getItem(name);
  if (valueFromStore === null) return defaultValue; // No value in store, return default one

  try {
    const jsonParsed: unknown = JSON.parse(valueFromStore);
    if (['boolean', 'number', 'bigint', 'string', 'object'].includes(typeof jsonParsed)) {
      return jsonParsed; // We successfully parse JS value from the store
    }
  } catch (error) {
    // Do nothing
  }

  return valueFromStore; // Return string value as it is
}

/**
 * Smartly writes value into localStorage
 */
export function localStorageSet(name: string, value: any) {
  if (IS_SERVER) {
    return; // Do nothing on server side
  }
  if (typeof value === 'undefined') {
    return; // Do not store undefined values
  }
  let valueAsString: string;
  if (typeof value === 'object') {
    valueAsString = JSON.stringify(value);
  } else {
    valueAsString = String(value);
  }

  localStorage.setItem(name, valueAsString);
}

/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Deletes value by name from localStorage, if specified name is empty entire localStorage is cleared.
 */
export function localStorageDelete(name: string) {
  if (IS_SERVER) {
    return; // Do nothing on server side
  }
  if (name) {
    localStorage.removeItem(name);
  } else {
    localStorage.clear();
  }
}
