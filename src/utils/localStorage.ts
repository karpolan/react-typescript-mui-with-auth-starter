/**
 * Smartly reads value from localStorage
 */
export function localStorageGet(name: string, defaultValue = ''): string {
  const valueFromStore = localStorage.getItem(name);
  if (valueFromStore === null) return defaultValue; // No value in store, return default one

  try {
    const jsonParsed = JSON.parse(valueFromStore);
    if (['boolean', 'number', 'bigint', 'string', 'object'].includes(typeof jsonParsed)) {
      return jsonParsed; // We successfully parse JS value from the store
    }
  } catch (error) {}

  // console.log(`localStorageGet(${name}) - result:`, valueFromStore)
  return valueFromStore; // Return string value as it is
}

/**
 * Smartly writes value into localStorage
 */
export function localStorageSet(name: string, value: any) {
  let valueAsString: string;
  if (typeof value === 'object') {
    valueAsString = JSON.stringify(value);
  } else {
    valueAsString = String(value);
  }

  localStorage.setItem(name, valueAsString);
  // console.log(`localStorageSet(${name}, ${valueAsString})`);
}

/**
 * Deletes value by name from localStorage, if specified name is empty the localStorage is cleared.
 */
export function localStorageDelete(name: string) {
  // console.log(`localStorageDelete(${name})`);
  if (name) {
    localStorage.removeItem(name);
  } else {
    localStorage.clear();
  }
}
