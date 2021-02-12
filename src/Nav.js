import googleappmenu2 from './img/googleappmenu2.png';
import ampljacket from './img/ampljacket.jpg';

function Nav() {
   
       return (
           <>
               <nav className="" id="nav">

                        
                        <div className="nav-position" id="left">
                            <p>About</p>
                            <p>Store</p>
                        </div>

                        <div className="nav-position" id="right">
                            <p>Gmail</p>
                            <p>Images</p>
                            <p>
                                <abbr title="Google apps"></abbr><img src={googleappmenu2} id="image1">

                            </p>

                            <img src={ampljacket} id="image2">

                        </div>
                </nav>
           </>
       )
   }
   
   export default Nav;