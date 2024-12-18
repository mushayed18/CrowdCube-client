import { useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AllCampaign = () => {
  const campaigns = useLoaderData();

  const navigate = useNavigate();

  const handleSeeMore = (_id) => {
    navigate(`/campaigns/${_id}`);
  };

  return (
    <div>
      {campaigns ? (
        <div className="container mx-auto p-6 my-20">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <Typewriter
              words={["All Campaigns"]}
              loop={true}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={2000}
              cursor
              cursorStyle="|"
            />
          </h2>

          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2">Campaign Title</th>
                <th className="border px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign._id}>
                  <td className="border px-4 py-2 text-center">
                    {campaign.title}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleSeeMore(campaign._id)}
                      className="border-my-red btn"
                    >
                      See More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 my-10">No data found</div>
      )}
    </div>
  );
};

export default AllCampaign;
