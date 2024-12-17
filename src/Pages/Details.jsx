import { useLoaderData, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const Details = () => {
  const campaign = useLoaderData();

  const navigate = useNavigate();

  const { title, thumbnail, type, description, minDonation, deadline, email, name } = campaign;

  const handleBackBtn = () => {
    navigate('/all-campaign')
  }

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto p-6 my-20 border border-my-gray shadow-md rounded-lg">
      <div className="flex justify-center">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-64 md:h-96 object-cover rounded-md mb-6 shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>

      <p className="text-sm font-semibold text-center mb-6">Type: {type}</p>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Description</h3>
        <p className=" leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-bold mb-1">Minimum Donation</h3>
          <p>${minDonation}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">Deadline</h3>
          <p>{new Date(deadline).toLocaleDateString()}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">Created By</h3>
          <p>{name}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">Contact Email</h3>
          <p>{email}</p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => alert("Donate functionality will go here!")}
          className="btn text-my-red border-my-red w-full"
        >
          Donate
        </button>
        <button onClick={handleBackBtn} className="btn rounded-full mt-4 border-my-red"><IoMdArrowBack /></button>
      </div>
    </div>
  );
};

export default Details;
