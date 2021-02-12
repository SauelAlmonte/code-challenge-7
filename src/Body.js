import google1 from './img/google1.png';


function Body() {
   
       return (
           <>
               <div className="container px-8 mx-auto pt-24 max-w-xl flex flex-col space-y-6">
                    <div>
                        <img className="h-24 mx-auto mb-6" src={google1} alt="google1"></img>
                        <div className="rounded-full py-2 px-4 flex border-2 border-gray-300 hover:shadow-lg transition-all duration-300">
                            <div className="place-self-center text-gray-500 cursor-pointer">
                                <i className="fas fa-search text-lg"></i>
                            </div>
                            <div className="flex px-4 w-full">
                                <input type="text" className="w-full border-none outline-none text-base"></input>
                            </div>   
                        </div>
                        <div className="place-self-center text-gray-500 cursor-pointer"><i className="fas fa-microphone text-lg"></i>
                        </div>
                    </div>
                    <div className="mx-auto flex space-x-2">
                            <input type="submit" className="px-4 py-2 rounded bg-gray-300 cursor-pointer transition-all duration-300 hover:shadow-lg" value="Google Search"></input>
                            <input type="submit" className="px-4 py-2 rounded bg-gray-300 cursor-pointer transition-all duration-300 hover:shadow-lg" value="I'm Feeling Lucky"></input>
                    </div>
                </div>
           </>
       )
   }
   
   export default Body;