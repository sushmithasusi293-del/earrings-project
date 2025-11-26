import Hook from './Hook'
import './Product.css'
const Hoopsproduct = () => {
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
                        {Hook.map((item) =>
                        (
                            <div class="col" key={item.id}>
                                <img src={item.img} width={300} />
                                <h4>{item.name}</h4>
                                <p>{item.price}</p>
                                <button className='btn'>Add To Card</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hoopsproduct