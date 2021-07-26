import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const LandingContactUs = () => {
  return (
    <>
      <div className="landing-contact">
        <div className="landing-box">
          <h1 className="heading">Contact Us</h1>
          <div className="icons-box">
            <InstagramIcon className="icons" />
            <FacebookIcon className="icons" />
            <TwitterIcon className="icons" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingContactUs;
