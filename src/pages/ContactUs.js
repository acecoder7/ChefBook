import react from "react";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import mainLogo from "../components/icon.png";


const ContactUsP = () => {
    return (
        <>
            <Navbar />
            <img
            alt=""
            src={mainLogo}
            width="100"
            height="100"
            className="logo"
            text-align="center"
          />
            <ContactUs />
        </>
    )
}

export default ContactUsP;