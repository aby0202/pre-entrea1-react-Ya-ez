import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalCart, setTotalCart] = useState(0)
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart([...cart, productToAdd])
        } else {
          const cartUpdated = cart.map(prod => {
            if(prod.id === productToAdd.id) {
              const productUpdated = {
                ...prod,
                quantity: productToAdd.quantity
              }

              return productUpdated
            } else {
              return prod
            }
          })

          setCart(cartUpdated)
        }
      }
    
      const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
      }
    
      const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
      }

      useEffect(() => {
        const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
      }, [cart])

      useEffect(() => {
      const totalCart= getTotalCart()
      setTotalCart(totalCart)
    }, [cart])


    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }
    
    const getProductQuantity = (id) => {
      const product = cart.find(prod => prod.id === id)

      return product?.quantity
    }

    const getTotalCart = ()=>{
        let totalCart = 0

        cart.forEach(prod=>{
            totalCart += prod.price * prod.quantity
        })

        return totalCart
    }

    const clearCart=()=>{
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity, getProductQuantity, totalCart, totalQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}