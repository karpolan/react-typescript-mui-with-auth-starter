// Helper to read object properties as object['name']
export type ObjectPropByName = Record<string, any>;

/**
 * Data for "Page Link" in SideBar adn other UI elements
 */
export declare interface LinkToPage {
  title?: string;
  path?: string;
  icon?: string;
}
