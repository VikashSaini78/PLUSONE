import {Box,Typography } from "@mui/material";

function Header() {
    return (
        <>
    

           <header>
           <div className=" w-full  h-auto bg-gray-500 m-auto relative top-24">
             <img className=" w-screen h-auto" src="./media/header.webp" alt="error"/>
             {/* <Box sx={{
               width:"500px",
               height:'200px',
               backgroundColor:'pink',
               top:'0',
               position:'absolute',
               position:'relative',
               zIndex:'-1'
             }}>
                 <Typography>PLUSONE</Typography>
                 <h1>For Happy & Fit Mommies</h1>
                 <button>Book Now</button>
             </Box> */}
             </div>
           

             
{/* Our Programs in SF */}

             <div className=' w-full m-auto h-96 bg-white-900  flex justify-center items-center' >
             
            <Typography variant="h3" sx={{
              marginTop:'70px',
              fontWeight:'bold',
             
            }}>Our Programs in SF</Typography>
             
             </div>


{/* Boxs */}


{/* 1 */}
             <div className=' container-fulid'>
             <div className="row">
             <div className="col-md-4">
              <div className=" Box_colom">
                <img className="Programs_sf-img" src="./media/card1.webp"  alt="..."/>
               
                <Typography variant="h5" className="p-4">Mommy Time</Typography>
                <hr className="w-10/12 m-auto  text-slate-500"/>
                <p className="ml-5 mt-4">Mon, Tue, Wed, Thu, Fri</p>
                <div className=" ml-5 mt-2"> 
                1 hr
                </div>
                <div className=" ml-5 mt-2"> 
                $25
                </div>
               <div className="p-4 ">
               <button className="btn_booknow">Book Now</button>
               </div>
              </div>
             </div>

{/* 2 */}
<div className="col-md-4">
              <div className=" Box_colom">
                <img className="Programs_sf-img" src="./media/card3.webp"  alt="..."/>
                <Typography variant="h5" className="p-4">Mom Plus One</Typography>
                <hr className="w-10/12 m-auto  text-slate-500"/>
                <p className="ml-5 mt-4">Mon, Tue, Wed, Thu, Fri</p>
                <div className=" ml-5 mt-2"> 
                1 hr
                </div>
                <div className=" ml-5 mt-2"> 
                $25
                </div>
               <div className="p-4 ">
               <button className="btn_booknow">Book Now</button>
               </div>
              </div>
             </div>

{/* 3 */}
<div className="col-md-4">
              <div className=" Box_colom">
                <img className="Programs_sf-img"  src="./media/card4.webp"  alt="..."/>
                <Typography variant="h5" className="p-4">Mom to Be</Typography>
                <hr className="w-10/12 m-auto  text-slate-500"/>
                <p className="ml-5 mt-4">Mon, Tue, Wed, Thu, Fri</p>
                <div className=" ml-5 mt-2"> 
                1 hr
                </div>
                <div className=" ml-5 mt-2"> 
                $25
                </div>
               <div className="p-4 ">
               <button className="btn_booknow">Book Now</button>
               </div>
              </div>
             </div>

             </div>
         

             </div>





             {/* Our Locations */}

         <div className=" w-full h-auto relative">
           <img className="yogo_img" src="./media/yogo img.webp"/>
             
             <div className="white_bord">
              <div className=" white_bord2 ">
                <Typography variant="h4" sx={{fontWeight:'bold',}}>Our Locations</Typography>
                <Typography variant="h6" className="mt-2 mb-2">San Francisco</Typography>
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                <Typography variant="h6" className="mt-2 mb-2">Marin</Typography>
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                <Typography variant="h6" className="mt-2 mb-2">Oakland</Typography>
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                <button className="btn_join-now">Join Now</button>
              </div>
             </div>

         </div>




         {/* Our Story */}


              <div className=" Our-Stor">
              <div className="w-3/4 m-auto h-80 text-center">
         <Typography variant="h3" sx={{fontWeight:'bold',}}>Our Story</Typography>
         <p className="mt-4 p-3">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a
          story and let your users know a little more about you.</p>

          <button className="btn_join-now">Read more</button>

         </div> 
              </div>


          {/* Mommies say */}


          <div className='sm:max-xl: md:grid-cols-2 md:item-center md:text-left sm:max-xl: grid'>


        <div className=" w-full h-auto bg-slate-100 flex justify-center items-center  ">
          <div className=" white_box-mommies ">
          <Typography variant="h3" sx={{fontWeight:'bold'}}>What Our
          Mommies Say</Typography>
          <p className="mt-5">“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.  Let your customers review you and tell their friends how great you are.”</p>
          <button className="mt-4">Ronda Moss</button>
          </div>
        </div>  

        <img className="" src="./media/2.webp"/>
        </div>



        {/* Watch Us Go */}




        <div className=" Watch-Us">
              <div className="w-3/4 m-auto h-60 text-center">
         <Typography variant="h3" sx={{fontWeight:'bold',}}>Watch Us Go</Typography>
         <p className="mt-4 p-3">Watch Us Go
I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>


         </div> 
              </div>


    {/* 5box img */}


    

             </header>
        </>

      );
}


export default Header;