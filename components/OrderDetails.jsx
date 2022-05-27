import React ,{useState} from 'react'
import styles from "./OrderDetails.module.css"
import router from 'next/router'
import { useSelector } from 'react-redux';
export default function Checkout({ createOrder }) {
    const cart = useSelector(state => state.cartlist.products)
    const other = useSelector(state => state.cartlist)
    const initialValues = { name: "", phone: "", address: "" };
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Billing Address</h2>
                <form>
                    <input type="text" placeholder='Name' name="name" value={formValues.name}
                        onChange={handleChange} />
                    <input type="number" placeholder='Phone' name="phone" value={formValues.phone}
                        onChange={handleChange} />
                    <textarea id="address" placeholder='Address' name="address" value={formValues.address}
                        onChange={handleChange} />
                </form>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>${other.totalPrice.toFixed(3)}
                </div>
                <button className={styles.button} onClick={() => {
                    createOrder({
                        customer: formValues.name,
                        address: formValues.address,
                        total: other.totalPrice,
                        method: 0,
                    })
                }}>PLACE ORDER</button>
                <p>Go to Cart<span onClick={() => { router.push("/cart") }}>Cart</span></p>
            </div>
        </div>
    )
}
