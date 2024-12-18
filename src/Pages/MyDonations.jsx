import { useLoaderData } from "react-router-dom";
import MyDonation from "../Component/MyDonation";
import { Typewriter } from "react-simple-typewriter";

const MyDonations = () => {
  const myDonations = useLoaderData();

  return (
    <div className="my-28">
      {myDonations.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            <Typewriter
              words={["My donations"]}
              loop={true}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={2000}
              cursor
              cursorStyle="|"
            />
          </h2>
          <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myDonations.map((myDonation) => {
              return (
                <MyDonation
                  key={myDonation._id}
                  myDonation={myDonation}
                ></MyDonation>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-my-red">
          You have not donated yet!
        </div>
      )}
    </div>
  );
};

export default MyDonations;
