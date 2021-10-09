import {BUY_CAKE, STOCK_CAKE} from './cakeTypes';

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const stockCake = () => {
    return {
        type: STOCK_CAKE
    }
} 