const calculos = ({ inicial, anual, interes, anios}) => {
    const cantAllAnios = ( anual * anios ) + inicial
    const gain = cantAllAnios * interes
    const ans = cantAllAnios + gain

    return ans
}
export default calculos