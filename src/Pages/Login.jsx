import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, user, setUser, signInWithGoogle, loading, setLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Incorrect Credential!!",
          text: "Please type valid user email or password",
        });
      });
  };

  const handleGoogleBtn = () => {
    signInWithGoogle().then((result) => {
      setUser(result.user);
      navigate("/");
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-6">
      <Helmet>
        <title>Login | Crowd Cube</title>
      </Helmet>
      <div className="w-[90%] md:w-full max-w-md p-6 rounded-lg shadow-2xl my-1 backdrop-blur-lg bg-white/30">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg"
              required
            />
          </div>

          <button className="btn w-full text-my-red">Login</button>
          <div className="divider">OR</div>
          <button onClick={handleGoogleBtn} className="btn w-full">
            Login with Google <FcGoogle size={20} />
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          New to this website?{" "}
          <NavLink to="/register" className="text-my-red">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
