import "./register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="top">
        <img
          className="logo"
          src="https://i.ibb.co/CwrCn7S/netflix-logos-idu-Ah9-LKti.png"
          alt=""
        />
        <button className="loginButton"> Sign In</button>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
            Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="input">
            <input type="email" placeholder="email adress" ></input>
            <button className="registerButton">Get Started</button>
        </div>
      </div>
    </div>
  );
}
