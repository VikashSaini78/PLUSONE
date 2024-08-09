import { Typography } from "@mui/material";

function About() {
    return ( 
        <>
                       <div className="About">
                     <Typography sx={{fontWeight:'bold'}} variant="h2">About Us</Typography>
                     </div>



                     <div className="About_box">
                      <div className="container-fulid">
                      <div className="row">
                      <div className="col-md-6">
                       <img src="./media/about1.webp" alt="img-error"/>
                      </div>
                      <div className="col-md-6">
                     <div className="flex justify-center items-center w-full h-screen">
                     <div className="about_sm-box">
                     <Typography sx={{fontWeight:'bold'}} variant="h4">Our Story</Typography>
                  <p className="mt-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                  <p className="mt-4">This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.

                     </p>
                      </div>
                     </div>
                      </div>
                      </div>
                      </div>
                     </div>

                     {/* 2 */}


                     <div className="About_box">
                      <div className="container-fulid">
                      <div className="row">
                      <div className="col-md-6">
                      
                       <div className="flex justify-center items-center w-full h-screen">
                     <div className="about_sm-box">
                     <Typography sx={{fontWeight:'bold'}} variant="h4">
                     Our Vision</Typography>
                  <p className="mt-4">
                       Our Vision
                      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.

                       ​</p>
                  <p className="mt-4">​This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.

                     </p>
                      </div>
                     </div>
                      </div>
                      <div className="col-md-6">
                      <img src="./media/about2.webp" alt="img-error"/>
                      </div>
                      </div>
                      </div>
                     </div>
        </>

     );
}

export default About;