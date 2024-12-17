import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateCampaign = () => {
  const campaign = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedCampaign = {
      title: form.title.value,
      type: form.type.value,
      description: form.description.value,
      goal: form.goal.value,
      userName: form.userName.value, // Read-only
      userEmail: form.userEmail.value, // Read-only
    };

    console.log(updatedCampaign);
  };

  return (
    <div className="container mx-auto my-28 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Update Campaign
      </h2>

      <form
        onSubmit={handleUpdate}
        className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10"
      >
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Campaign Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={campaign.title}
            placeholder="Enter campaign title"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Campaign Type
          </label>
          <input
            type="text"
            name="type"
            defaultValue={campaign.type}
            placeholder="Enter campaign type"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={campaign.description}
            placeholder="Enter campaign description"
            rows="4"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Goal Amount
          </label>
          <input
            type="number"
            name="goal"
            defaultValue={campaign.goal}
            placeholder="Enter goal amount"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            value={campaign.userName}
            className="w-full bg-gray-100 border rounded-md p-3"
            readOnly
          />
        </div>

        {/* User Email (Read-only) */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            value={campaign.userEmail}
            className="w-full bg-gray-100 border rounded-md p-3"
            readOnly
          />
        </div>

        {/* Update Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaign;
