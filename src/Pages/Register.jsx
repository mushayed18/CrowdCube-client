import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser, user, setUser, updateUserProfile, signInWithGoogle, loading } = useContext(AuthContext);

  const [visibility, setVisibility] = useState(false);

  const [valid, setValid] = useState("");

  const navigate = useNavigate();

  const handleToggle = () => {
    setVisibility(!visibility);
  };

  const handleGoogleBtn = () => {
    signInWithGoogle().then((result) => {
      setUser(result.user);
      navigate('/');
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regex.test(password)) {
      setValid(
        "Password must be at least 6 characters long, include at least one uppercase letter, and one lowercase letter"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your account has been created successfully!",
        });

        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate('/');
          setValid('');
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "This email is already taken. Please try with different one.",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-14">
      <div className="w-[90%] md:w-full max-w-md p-6 rounded-lg shadow-2xl my-6 backdrop-blur-lg bg-white/30">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 border rounded-lg"
              required
            />
          </div>

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
            <label className="block text-sm font-medium">Photo URL</label>
            <input
              name="photo"
              type="text"
              id="photo"
              placeholder="Choose a photo URL"
              className="w-full px-4 py-2 mt-1 border rounded-lg"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input
              name="password"
              type={visibility ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg"
              required
            />
            {valid && <p className="text-red-700 text-sm">{valid}</p>}
            <button
              onClick={handleToggle}
              className="absolute top-9 right-[1rem]"
            >
              {visibility ? (
                <IoEyeOutline size={20} />
              ) : (
                <FaRegEyeSlash size={20} />
              )}
            </button>
          </div>

          <button className="btn w-full text-my-red">Register</button>
          <div className="divider">OR</div>
          <button onClick={handleGoogleBtn} className="btn w-full">
            Sign up with Google <FcGoogle size={20} />
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="text-my-red">
            Log in here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
