import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateCampaign = () => {
  const campaign = useLoaderData();

  const { deadline } = campaign;
  const dateWithoutTime = deadline.split("T")[0];

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedCampaign = {
      title: form.title.value,
      type: form.type.value,
      description: form.description.value,
      minDonation: form.minDonation.value,
      thumbnail: form.thumbnail.value,
      deadline: form.deadline.value,
      name: form.name.value,
      email: form.email.value,
    };

    fetch(`http://localhost:5000/campaigns/${campaign._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Campaign Updated Successfully!",
            text: "Your campaign has been updated.",
          });
          form.reset();
          navigate(`/my-campaigns/${user?.email}`);
        }
      });
  };

  return (
    <div className="container mx-auto my-28 px-4 flex flex-col items-center">
      <Helmet>
        <title>Update Campaign | Crowd Cube</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-8">Update Campaign</h2>

      <form
        onSubmit={handleUpdate}
        className="w-[95%] md:w-full max-w-2xl p-6 rounded-lg shadow-2xl backdrop-blur-lg bg-white/30 my-6"
      >
        <div className="mb-6">
          <label className="block font-semibold mb-2">Campaign Title</label>
          <input
            type="text"
            name="title"
            defaultValue={campaign.title}
            placeholder="Enter campaign title"
            className="w-full border rounded-md p-3 focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Campaign Type</label>
          <input
            type="text"
            name="type"
            defaultValue={campaign.type}
            placeholder="Enter campaign type"
            className="w-full border rounded-md p-3 focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            defaultValue={campaign.description}
            placeholder="Enter campaign description"
            rows="4"
            className="w-full border rounded-md p-3 focus:outline-none"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Goal Amount</label>
          <input
            type="number"
            name="minDonation"
            defaultValue={campaign.minDonation}
            placeholder="Enter goal amount"
            className="w-full border rounded-md p-3 focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Photo URL</label>
          <input
            type="text"
            name="thumbnail"
            defaultValue={campaign.thumbnail}
            placeholder="Enter photo URL"
            className="w-full border rounded-md p-3 focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Campaign Deadline</label>
          <input
            type="date"
            name="deadline"
            defaultValue={dateWithoutTime}
            className="w-full border rounded-md p-3 focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">User Name</label>
          <input
            type="text"
            name="name"
            value={campaign.name}
            className="w-full border rounded-md p-3"
            readOnly
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">User Email</label>
          <input
            type="email"
            name="email"
            value={campaign.email}
            className="w-full border rounded-md p-3"
            readOnly
          />
        </div>

        <div className="text-center">
          <button className="btn w-full border border-my-gray text-my-red">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaign;
