import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title={"Login"}>
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold ">Loading...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4"> Login</h3>

                {/* FORM */}
                <Form onSubmit={signIn} className="auth__form">
                  <FormGroup className="form__group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ transition: 2 }}
                    type="submit"
                    className="buy__btn auth__btn w-100 mt-4 "
                  >
                    Login
                  </motion.button>
                  <p>
                    Don't have an account?
                    <Link className="text-info" to="/signup">
                      {" "}
                      Create an Account{" "}
                    </Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
