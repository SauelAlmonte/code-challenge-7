import googleappmenu2 from './img/googleappmenu2.png';
import ampljacket from './img/ampljacket.jpg';

function Nav() {
   
       return (
           <>
               <nav className="flex justify-between text-sm text-gray-700">

                        
                        <div className="flex items-center p-6">
                            <p className="block p-3">About</p>
                            <p className="block p-3">Store</p>
                        </div>

                        <div className="flex items-center p-6">
                            <p className="block p-3">Gmail</p>
                            <p className="block p-3">Images</p>
                            <p>
                                <img className="w-6 h-6 opacity-50 block mr-3" src={googleappmenu2} alt="google-app"></img>

                            </p>

                            <img className="rounded-full w-8 h-8" src={ampljacket} alt="ampljacket"></img>

                        </div>
                </nav>
           </>
       )
   }
   
   export default Nav;