import { Typewriter } from "react-simple-typewriter";
import SwiperLayout from "../Component/SwiperLayout";

const Home = () => {
  return (
    <div>
      <SwiperLayout></SwiperLayout>

      <section className="py-16 px-6">
        <div className="container mx-auto border-2 ">
          
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-my-red">
            <Typewriter
              words={["Our Mission"]}
              loop={true}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={2000}
              cursor
              cursorStyle="|"
            />
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            At <span className="font-bold">Crowdcube</span>, we believe in
            empowering communities by bringing ideas and causes to life. Our
            platform bridges the gap between donors and dreamers, enabling
            everyone to contribute to meaningful projects, startups, and
            charitable causes.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Empowering Creators
              </h3>
              <p>
                Help creators turn their ideas into reality by offering the
                support they need.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Building Communities
              </h3>
              <p>
                Foster collaboration by connecting people with common goals and
                passions.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Creating Impact</h3>
              <p>
                Drive change by supporting causes that truly make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-my-red">
            <Typewriter
              words={["How it works"]}
              loop={true}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={2000}
              cursor
              cursorStyle="|"
            />
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-my-red mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Create a Campaign</h3>
              <p>
                Share your story, set a goal, and inspire others to support your
                vision.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-my-red mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Spread the Word</h3>
              <p>
                Use social media, email, and more to reach potential backers.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-my-red mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Achieve Your Goal</h3>
              <p>
                Watch as contributions come in, and bring your project to life!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
