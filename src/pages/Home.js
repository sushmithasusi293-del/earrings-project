import React from 'react'
import e2 from '../images/e2.jpg'
import e3 from '../images/e3.jpg'
import e4 from '../images/e4.jpg'
import e5 from '../images/e5.jpg'
import e6 from '../images/e6.jpg'
import e7 from '../images/e7.jpg'
import e8 from '../images/e8.jpg'
import e9 from '../images/e9.jpg'
import e10 from '../images/e10.jpg'
import e12 from '../images/e12.jpg'
import e13 from '../images/e13.jpg'
import './Home.css'
import Homeproduct from './Homeproduct'
import './Product.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ol className='image' >
                <Link to="/stupp"> <li><img src={e2} />
                    <p>Stud</p></li></Link>
                <Link to='/hook'><li><img src={e3} /><p>Hoops</p></li></Link>
                <Link to='/pearl'><li><img src={e4} /><p>Pearl</p></li></Link>
                <Link to='/stupp'> <li><img src={e5} /><p>Anti Tarnish</p></li></Link>
                <Link to='pearl'><li><img src={e6} /><p>Party</p></li></Link>
                <Link to ='hook'><li><img src={e7} /><p>Chunky</p></li></Link>
               <Link to='stupp'> <li><img src={e8} /><p>Bow</p></li></Link>
                <Link to='/butterfly'> <li><img src={e9} /><p>Butterfly</p></li></Link>
                <li><img src={e10} /><p>Heart</p></li>
                <li><img src={e12} /><p>Color Pop</p></li>
                <li><img src={e13} /><p>Dreamy</p></li>
            </ol>

        </div>
    )
}

export default Home