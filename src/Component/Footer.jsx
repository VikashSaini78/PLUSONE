import { Box, Link, Typography } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return ( 
        <>
            <header>
               <Box sx={{
                width:'100%',
                height:'40vh',
               //  backgroundColor:'pink',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
               }}>
                {/* <Typography variant="h3" sx={{fontWeight:'bold'}}>Let's Get Moving</Typography> */}
                <hi className='get_moving-h1'>Let's Get Moving</hi>
               </Box>


            <div className="email_mobile-box">
            <div className="contaier">
             <div className="row">
             <div className="col-md-6">
             <div className=" w-full h-96 flex justify-center items-center">
             <div className="white_boxon-mobile">
             <Typography variant="h4" sx={{fontWeight:'bold'}}>Join us on mobile!</Typography>
             <p>Download the Spaces by Wix app and join “mommy-fitness” to easily stay updated on the go</p>
             <div className=" mt-5 flex gap-5">
               <Link className=" cursor-pointer" top={'#'}><img src='./media/apple.webp' alt=""/></Link>
                <Link className=" cursor-pointer" top={'#'}><img src='./media/google.webp' alt=""/></Link>
             </div>

             </div>
             </div>
             </div>

             <div className="col-md-6">
             <div className=" w-full h-96 flex justify-center items-center">
             <div className="white_boxon-form">

             <input type="text" className="form-control" placeholder="Full Name"></input>
             <input type="Email" className="form-control mt-4" placeholder="Email"></input>

             <div className="form-floating ">
             <textarea className="form-control mt-4 h-40" placeholder="Leave a comment here" id="floatingTextarea" style={{height:'100px'}}></textarea>
            <label for="floatingTextarea">Comments</label>

             <div className=" text-end mt-4"><button className="btn_send">send</button> </div>

            </div>



             </div>
             </div>
             </div>
             </div>
             </div>
            </div>

          

            <div className="email_container">
             <footer> 

             <div className="container">
             <div className="row">
             <div className="col-md-6">
              <Typography variant="h4" sx={{fontWeight:'bold'}}>Subscribe to Our Newsletter</Typography>
              <div>
              <input type="Email" className="form-control mt-4" placeholder="Email"></input>
              <button className="btn_send mt-4">Subscribe Now</button>
              </div>
             </div>

             <div className="col-md-6">
             <div className="flex gap-3 text-4xl mt-3">
                <Link sx={{color:'black', cursor:'pointer'}}><FaFacebookF/></Link>
                <Link sx={{color:'black', cursor:'pointer'}}><FaInstagram/></Link>
                <Link sx={{color:'black', cursor:'pointer'}}><FaYoutube/></Link>
             </div>
             <div className="mt-4 cursor-pointer">
                <Link style={{textDecoration:'none',marginTop:'16px',color:'gray'}}>vikashbanskhoh@gmail.com  123-46-7890</Link>
                <p className="mt-4 text-slate-700">Office: 500 Terry Francine Street, San Francisco, CA 94158</p>
             </div>
            </div>
             </div>
             </div>

             </footer>
             </div>
            </header>
        </>
     );
}

export default Footer;