import { types } from "./constants";

export const getItemDetail = (itemId) => {
    console.log("getItemDetail.action.....", itemId)
    return {
        type: types.LOAD_ITEM_DETAIL,
        itemId
    };
}
