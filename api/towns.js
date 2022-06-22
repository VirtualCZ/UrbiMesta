/**
 * This file is property of URBITECH s.r.o. any unlawful sharing
 * will be punished.
 */

import { getById } from "./utils.js";
import { towns } from "./data.js";

/**
 * Returns a town if a town exists
 *
 * @param {number} id town id
 * @returns town
 */
export const getTown = async (id) => {
  return getById(towns, id);
};

/**
 * Returns all town ids
 *
 * @param {number} id town id
 * @returns town
 */
export const getTownIds = async () => {
  return { ids: Object.keys(towns).map(i => parseInt(i)) };
};
