import { useLoaderData } from "react-router-dom";

const MyCampaign = () => {
  const campaigns = useLoaderData();

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">My Campaigns</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-my-gray">
          <thead>
            <tr>
              <th className="border px-2 md:px-4 py-2 text-xs md:text-sm lg:text-base">
                Title
              </th>
              <th className="border px-2 md:px-4 py-2 text-xs md:text-sm lg:text-base">
                Type
              </th>
              <th className="border px-2 md:px-4 py-2 text-xs md:text-sm lg:text-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <tr key={campaign._id}>
                  <td className="border px-2 md:px-4 py-2 text-xs md:text-sm lg:text-base text-center">
                    {campaign.title}
                  </td>
                  <td className="border px-2 md:px-4 py-2 text-xs md:text-sm lg:text-base text-center">
                    {campaign.type}
                  </td>
                  <td className="border px-2 md:px-4 py-2 flex justify-center gap-2 lg:gap-4">
                    <button className="btn bg-my-gray text-my-red text-xs md:text-sm px-2 py-1 md:px-3 md:py-2">
                      Update
                    </button>
                    <button className="btn btn-danger bg-my-red text-my-gray text-xs md:text-sm px-2 py-1 md:px-3 md:py-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  rowSpan="3"
                  className="text-center py-4 text-sm md:text-base"
                >
                  No campaigns found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
