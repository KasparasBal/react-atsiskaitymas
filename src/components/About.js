import "../styles/About.css";

const beans_back =
  "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";

const About = () => {
  return (
    <div className="about_container">
      <div style={{ backgroundImage: `url(${beans_back})` }} className="beans">
        <p className="about_description">
          Finest Coffee Around, Different Blends, Beans and Ground Coffee.
        </p>
      </div>
    </div>
  );
};

export default About;
