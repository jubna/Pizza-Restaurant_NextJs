import React ,{useEffect, useState}from 'react'
import styles from "../styles/Cart.module.css"
import Image from 'next/image'
import pizza from "../public/img/pizza.png"

import axios from "axios";
import router from 'next/router'
import { useDispatch, useSelector } from 'react-redux';

import { reset ,addProduct} from '../redux/cartSlice';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import Link from 'next/link'
import OrderDetails from '../components/OrderDetails'

function Cart() {
  const dispatch=useDispatch()
const cart= useSelector(state=>state.cartlist.products)
const other=useSelector(state=>state.cartlist)
const [cash,setCash]=useState(false)
const [paypalEnable,setPaypalEnable]=useState(false)
let ids=[]
let filtered=[]
if (cart?.length > 0) {
  ids = cart.map(o => o._id)
  filtered = cart.filter(({_id}, index) => !ids.includes(_id, index + 1))
}

console.log(filtered)
console.log(cart);
const clear = () => {
  dispatch(reset());
};
const handleCheckout=()=>{
  setPaypalEnable(true)
  // router.push("/checkout")
}
// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = {"layout":"vertical"};

const createOrder = async (data) => {
  try {
    const res = await axios.post("http://localhost:3000/api/orders", data);
    if (res.status === 201) {
      dispatch(reset());
      router.push(`/order/${res.data._id}`);
    }
  } catch (err) {
    console.log(err);
  }
};


// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);

  return (<>
    { (showSpinner && isPending) && <div className="spinner" /> }
    <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
            return actions.order
                .create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: currency,
                                value: amount,
                            },
                        },
                    ],
                })
                .then((orderId) => {
                    // Your code here after create the order
                    return orderId;
                });
        }}
        onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total:  other.totalPrice,
                method: 1,
              });
            });
        }}
    />
</>
);
}
  return (
        <div className={styles.container}>
          <div className={styles.left}>
            <table className={styles.table}>
              <thead className={styles.trTitle}>
                <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
              </thead>
           
              {filtered?.map((item,index)=>{
                return(
                  <tbody className={styles.tr} key={index}>
                  <tr>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image
                        src={item.image}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>{item.name}</span>
                  </td>
                  <td>
                    <span className={styles.extras}>
                     {item.additionalIng.text}
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>${item.totalprice}</span>
                  </td>
                  <td>
                    <span className={styles.quantity}>{item.counter}</span>
                  </td>
                  <td>
                    <span className={styles.total}>${(item.totalprice*item.counter).toFixed(3)}</span>
                  </td>
                  </tr>
              
                </tbody>
                )
              })}
           
            </table>
          </div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>${other.totalPrice.toFixed(3)}
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>$0.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>${other.totalPrice.toFixed(3)}
              </div>
              <button className={styles.button} onClick={()=>{clear()}}>CLEAR</button>
            
              {paypalEnable?
              <>
              <button className={styles.button} onClick={()=>{setCash(true)}}>CASH ON DELIVERY</button>
              <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "credit,card,p24",
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
      </>
      :
        <button className={styles.button} onClick={handleCheckout}>CHECKOUT NOW!</button>
      }
      {cash && <OrderDetails createOrder={createOrder}/>}
            </div>
          </div>
        </div>
  )      
}

export default Cart