import { useNavigate } from "react-router-dom";

const RunningCampaign = (campaign) => {
  const {_id, thumbnail, title, type, minDonation, name } = campaign.campaign;

  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/campaigns/${_id}`);
  };

  return (
    <div className="w-72 rounded-lg overflow-hidden border">
      <div className="w-72 h-48">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>
          Type: <span className="font-medium capitalize"><span className="text-my-red">{type}</span></span>
        </p>
        <p>
          Donation amount: <span className="font-medium capitalize"><span className="text-my-red">{minDonation}</span></span>
        </p>
        <p>
          Name: <span className="font-medium capitalize"><span className="text-my-red">{name}</span></span>
        </p>
        <button onClick={handleSeeMore} className="btn mt-4 w-full btn-neutral">See more</button>
      </div>
    </div>
  );
};

export default RunningCampaign;
