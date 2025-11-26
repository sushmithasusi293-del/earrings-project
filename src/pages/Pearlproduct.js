import Pearl from './Pearl'
import './Product.css'


import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Cartslice';

const Pearlproduct = () => {


    const cartProducts = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch();
    const addCart = (item) => {
        dispatch(addToCart(item))
    }
    const deleteCart = (item) => {
        dispatch(removeFromCart(item))
    }


    return (
        <div>
            <div className='row1'>
                <div className='co'>
                    <div className="box">
                        <label for="customRange1" class="form-label"><h4>price</h4></label>
                        <input type="range" class="form-range" id="customRange1"></input>
                        <ol className="kkk">
                            <li><button className="k">₹INR</button></li>
                            <li>to</li>
                            <li><button className="kk">₹INR</button></li>
                        </ol>
                    </div>
                </div>
                <div className='co1'>
                    <div className="product1">
                        {Pearl.map((item) =>
                        (
                            <div class="col" key={item.id}>
                                <img src={item.img} width={300} />
                                <h4>{item.name}</h4>
                                <p>{item.price}</p>
                                {cartProducts.find(Items => Items.id === item.id) ? (
                                    <button onClick={() => { deleteCart(item) }}>Remove from Cart</button>)
                                    :
                                    (<button onClick={() => { addCart(item) }}>Add to Cart</button>)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pearlproduct