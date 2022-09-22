import React,{useState, useEffect} from "react";
import { Products,ProductDetail } from "./Data";

// create context
const GlobalContext = React.createContext();

// provider
const Provider = (props)=>{

    const [state, setState] = useState({
        Products:[],
        ProductDetail:ProductDetail,
        modalIsOpen:false,
        modalProduct:ProductDetail,
        cart:[],
        cartSubTotal:0,
        cartTotal:0,
        cartTax:0
    })

    useEffect(()=>{
        setProducts()
    }, [])

const setProducts = ()=> {
    let ProductsCopy = [];
    Products.forEach((product)=>{
        const singleProduct = {...product}
        ProductsCopy = [...ProductsCopy, singleProduct]
        // ProductsCopy.push(singleProduct)
    })
  
    setState({
        ...state,
        Products:ProductsCopy
    })
}


        // get product
        const getProduct = (slug)=>{
            const product = state.Products.find((product) => product.slug === slug)
            return product
        }
        // product detail
        const productDetailHandler = (slug)=>{
             const product = getProduct(slug)
             setState({...state, ProductDetail:product})
        }
 
        // add item to cart 
    const addToCart = (slug)=>{
        // copy products into a new array
        let tempProducts = [...state.Products]
        // get index of product
        const index = tempProducts.indexOf(getProduct(slug))
        // get product by index
        let product = tempProducts[index]
    //    update count, inCart and total
         product.count = 1;
         product.inCart = true;
         product.total = product.price;
        //  tell the state about the current changes
        //  call add tptal

        const cartItems = [...state.cart,product]

        console.log(cartItems)

        let tempTotal = 0;
        //    state.cart.reduce((acc, curr)=> acc + curr, 0)
           cartItems.forEach((item)=> {
            const price = parseFloat(item.total.replace('$', ''))
            console.log(item,price)
            tempTotal += price
           })

           const tempTax = tempTotal * 0.03
           const cartTax = parseFloat(tempTax.toFixed(2))
           const cartTotal = tempTotal + cartTax

           console.log(tempTotal, cartTotal, cartTax)

         setState({
            ...state,
            Products:tempProducts,
            ProductDetail:product,
            modalIsOpen :true,
            modalProduct:product,
            cart: [...state.cart,product],
            cartSubTotal:tempTotal,
            cartTotal:cartTotal,
            cartTax:cartTax
         })
     
    }

     // close modal
     const closeModal = ()=>{
        setState({
          ...state,
          modalIsOpen :false,
        }) 
  }

//   sum cart items price
       const addTotal = ()=>{ 
           let tempTotal = 0;
        //    state.cart.reduce((acc, curr)=> acc + curr, 0)
         console.log(state.cart)
           state.cart.forEach((item)=> {
            const price = parseFloat(item.total.replace('$', ''))
            console.log(item,price)
            tempTotal += price
           })

           console.log(tempTotal)

           const tempTax = tempTotal * 0.03
           const cartTax = parseFloat(tempTax.toFixed(2))
           const cartTotal = tempTotal + cartTax

           console.log(tempTotal, cartTotal, cartTax)

           setState({
            ...state,
            cartSubTotal:tempTotal,
            cartTotal:cartTotal,
            cartTax:cartTax
           })
       }


    console.log(state)
    return (
        <GlobalContext.Provider value={{
            ...state,
            addToCart,
            productDetailHandler,
            closeModal
            }}>
                {props.children}
        </GlobalContext.Provider>
    )
};

// Consumer
const Consumer = GlobalContext.Consumer;

export {Provider,Consumer}
export default GlobalContext