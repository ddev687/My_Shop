export const selectProduct=(productId)=>{
    return {
        type: 'select_product',
        payload: productId
    }
}