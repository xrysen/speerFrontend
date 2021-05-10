import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <FontAwesomeIcon icon={faEnvelope}/>
        <span style = {{paddingLeft: "20px"}}>support@experienceconcerts.co</span>
      </div>
      <div className = "company-outro">
        <h1>EXP|CON</h1>
        <p style={{fontSize: "20px"}}>2021 &copy; All Rights Reserved | Speer Technologies Incorporated</p>
      </div>
    </div>
  );
};

export default Footer;
