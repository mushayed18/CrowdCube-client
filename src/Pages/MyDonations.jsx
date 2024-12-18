import { useLoaderData } from "react-router-dom";
import MyDonation from "../Component/MyDonation";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import Loading from "../Component/Loading";

const MyDonations = () => {
  const myDonations = useLoaderData();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (myDonations) {
      setLoading(false);
    }
  }, [myDonations]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-28 w-11/12 mx-auto flex flex-col items-center">
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
          <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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
        <div className="min-h-96 flex items-center text-center justify-center text-3xl font-bold text-my-red">
          You have not donated yet!
        </div>
      )}
    </div>
  );
};

export default MyDonations;
