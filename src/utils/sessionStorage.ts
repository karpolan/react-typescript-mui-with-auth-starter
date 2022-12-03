import { IS_SERVER } from './utils';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Smartly reads value from sessionStorage
 */
export function sessionStorageGet(name: string, defaultValue: any = ''): any {
  if (IS_SERVER) {
    return defaultValue; // We don't have access to sessionStorage on the server
  }

  const valueFromStore = sessionStorage.getItem(name);
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
 * Smartly writes value into sessionStorage
 */
export function sessionStorageSet(name: string, value: any) {
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

  sessionStorage.setItem(name, valueAsString);
}

/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Deletes value by name from sessionStorage, if specified name is empty entire sessionStorage is cleared.
 */
export function sessionStorageDelete(name: string) {
  if (IS_SERVER) {
    return; // Do nothing on server side
  }
  if (name) {
    sessionStorage.removeItem(name);
  } else {
    sessionStorage.clear();
  }
}
