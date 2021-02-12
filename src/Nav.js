function Nav() {
    //const tableMenu = document.querySelector("#book-table")
    //   const nav = document.querySelector("#nav")
     //  let headNav = document.querySelector('#head-nav')
       // tableMenu.addEventListener( "click",()=>{
       //     nav.classList.toggle('show-sliding-menu')
       //     headNav.innerHTML='Book a Table'})
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
                                <abbr title="Google apps"></abbr><img src="img/googleappmenu2.png" id="image1">

                            </p>

                            <img src="img/AMPLJacket.jpg" id="image2">

                        </div>
                </nav>
           </>
       )
   }
   
   export default Nav;