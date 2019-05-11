import { types } from "./constants";

export const loadCartridges = () => {
    return {
        type: types.LOAD_CARTRIDGES,
    };
}
