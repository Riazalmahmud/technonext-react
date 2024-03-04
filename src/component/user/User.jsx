import walmartImage from "../../assets/Walmart_Index_Only.svg.png"
import deloitteImage from "../../assets/deloitte.svg.png"
import ciscoImage from "../../assets/cisco.svg.png"
import oktaImage from "../../assets/okta.svg.png"
import volvoImage from "../../assets/Volvo_Index_Only.svg.png"
const User = () => {
    return (
        <div className="max-w-screen-xl mx-auto ">
           <p style={{color: "#050038"}} className="my-6 text-center">
           Trusted by 45M+ users
            </p>  

<div className="grid grid-cols-10  gap-x-1 justify-items-center">
    <div className="lg:col-span-2 col-span-5 text-center">
        <img src={walmartImage} alt="" />
    </div>
    <div className="lg:col-span-2 col-span-5">
        <img src={ciscoImage} alt="" />
    </div>
    <div className="lg:col-span-2 col-span-5">
        <img src={volvoImage} alt="" />
    </div>
    <div className="lg:col-span-2 col-span-5">
        <img src={deloitteImage} alt="" />
    </div>
    <div className="lg:col-span-2 col-span-5 ">
        <img src={oktaImage} alt="" />
    </div>
</div>


        </div>
    );
};

export default User;