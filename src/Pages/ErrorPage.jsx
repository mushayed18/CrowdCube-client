import { useNavigate, useRouteError } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

export default function ErrorPage() {
  const error = useRouteError();

  const navigate = useNavigate();

  const handleBackToHomeBtn = () => {
    navigate('/');
  }

  return (
    <div
      id="error-page"
      className="min-h-screen flex flex-col items-center justify-center gap-5"
    >
      <h1 className="font-bold text-5xl text-center">Oops!</h1>
      <p className="text-2xl text-center">Sorry, an unexpected error has occurred.</p>
      <p className="font-bold text-2xl text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="form-control mt-6">
        <button onClick={handleBackToHomeBtn} className="btn rounded-full mt-4 border-my-red"><IoMdArrowBack /></button>
      </div>
    </div>
  );
}
