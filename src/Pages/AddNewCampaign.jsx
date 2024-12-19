import { useContext, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const thumbnail = e.target.thumbnail.value;
    const title = e.target.title.value;
    const type = e.target.type.value;
    const description = e.target.description.value;
    const minDonation = e.target.minDonation.value;
    const deadline = e.target.deadline.value;
    const email = user?.email;
    const name = user?.displayName;

    const newCampaign = {
      thumbnail,
      title,
      type,
      description,
      minDonation,
      deadline,
      email,
      name,
    };

    fetch("https://crowdcube-server-sigma.vercel.app/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Campaign Added Successfully!",
            text: "Your new campaign has been submitted.",
          });
          formRef.current.reset();
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-6">
      <Helmet>
        <title>Add new campaign | Crowd Cube</title>
      </Helmet>
      <div className="w-[90%] md:w-full max-w-2xl p-6 rounded-lg shadow-2xl backdrop-blur-lg bg-white/30 my-20">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add New Campaign
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
          <div>
            <label className="block text-sm font-medium">
              Image/Thumbnail URL <span className="text-my-red">*</span>
            </label>
            <input
              name="thumbnail"
              type="text"
              placeholder="Enter image URL"
              className="w-full px-4 py-2 mt-1 border-b focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Campaign Title <span className="text-my-red">*</span>
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter campaign title"
              className="w-full px-4 py-2 mt-1 border-b focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Campaign Type <span className="text-my-red">*</span>
            </label>
            <select
              name="type"
              className="w-full px-4 py-2 mt-1 border-b focus:outline-none"
              required
            >
              <option value="">Select Campaign Type</option>
              <option value="personal">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative">Creative Ideas</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Description <span className="text-my-red">*</span>
            </label>
            <textarea
              name="description"
              placeholder="Write a short description about the campaign"
              className="w-full px-4 py-2 mt-1 border-b focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Minimum Donation Amount <span className="text-my-red">*</span>
            </label>
            <input
              name="minDonation"
              type="number"
              placeholder="Enter minimum donation amount"
              className="w-full px-4 py-2 mt-1 border-b focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Deadline <span className="text-my-red">*</span>
            </label>
            <input
              name="deadline"
              type="date"
              className="w-full px-4 py-2 mt-1 border-b focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">User Email</label>
            <input
              name="email"
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2 mt-1 bg-gray-100 cursor-not-allowed border-b"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">User Name</label>
            <input
              name="name"
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 mt-1 bg-gray-100 cursor-not-allowed border-b"
            />
          </div>

          <button className="btn w-full border-my-gray text-my-red">
            Add Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
