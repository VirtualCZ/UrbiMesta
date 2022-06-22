/**
 * This file is property of URBITECH s.r.o. any unlawful sharing
 * will be punished.
 */


export const getById = async (data, id) => {
    if (data[id] === undefined) {
        throw new Error("Not found")
    }

    const rslt = data[id]
    rslt.id = id
    return rslt
}