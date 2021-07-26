interface Props {
  handleGetStarted: any;
}

const LandingHeader = (props: Props) => {
  return (
    <>
      <header className="landing-header">
        <div className="heading-box">
          <h1 className="heading">Bloggerx</h1>
          <p onClick={props.handleGetStarted} className="btn">
            Get Started
          </p>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
