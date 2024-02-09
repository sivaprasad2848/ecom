var productCart=[];
const Redux=(state=productCart,action)=>{
    if(action.type=="addcart"){
        productCart.push(action.value);
    }
    console.log(state);
    return state;
}
export default Redux;