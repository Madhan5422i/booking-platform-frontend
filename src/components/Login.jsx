/* eslint-disable no-unused-vars */
import './Login.css'
import { useState } from 'react';
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(false);
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    let showPassword = false
    const baseURL = "http://localhost:5173"; 
  return (
    <div className="bodyl">
      <div className="parent">
        <div className="main">
          <div className="one">
            <div className="login-txt">
              <h1>Login</h1>
              <p>
                Don&apos;t have an account?
                <a href={`${baseURL}`}>Sign up</a>
              </p>
            </div>
            <form method="post">
              <div className="email-cont">
                <MdEmail className="email" />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pass-cont">
                <MdLock className="pass" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <MdVisibilityOff  className="eye" />
                ) : (
                  <MdVisibility  className="eye" />
                )}
              </div>

              <div className="remember-txt">
                <div className="check">
                  <input
                    type="checkbox"
                    name="Remember me"
                    // onClick={() => toggleCheck()}
                    value={check}
                  />
                  <label htmlFor="Remember me">Remember me</label>
                </div>
                <a href="#">Forgot Password ?</a>
              </div>
              {loading ? (
                <div className="loading-c">
                </div>
              ) : (
                <button type="submit">Login</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
