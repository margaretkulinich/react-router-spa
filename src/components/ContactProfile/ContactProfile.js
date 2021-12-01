import { useParams } from "react-router";
import { contacts } from "../constants.js";
import "./style.css";

const ContactProfile = () => {
    const routeParams = useParams();
    const { firstName, lastName, phone, gender} = contacts[Number(routeParams.index)];

    return (
        <div className="contact-profile">
            <img className="contact-profile-img" src="https://dontfear.ru/wp-content/uploads/2014/07/4a0bf547e4d045c0f0557d33cd839f0b-300x300.png" alt="" />
            <h4 className="fullname">{firstName} {lastName}</h4>
            <div>
                mobile: {phone}
            </div>
            <div>gender: {gender}</div>
            <p>Contact info: It's a stranger, I don't know who is that</p>
        </div>
    );
};


export default ContactProfile;