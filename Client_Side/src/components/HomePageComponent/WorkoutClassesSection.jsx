import React from 'react';
import logoicon from "../../assets/icon.png";
const WorkoutClassesSection = () => {
  return (
    <>
      <div className="py-16 bg-gray-100 bg-blackcolor">
        <section className="gap-10 text-center">
          <div className="mb-8">
            <figure className="inline-block mb-4">
              <img src={logoicon} alt="Heading Icon" className="w-12 h-12 mx-auto" />
            </figure>
            <span className="block text-xs font-semibold font-oswald text-gray-400">Build your body strong</span>
            <h2 className="text-3xl font-bold text-white font-oswald">Workout Classes</h2>
          </div>
          <div className="container mx-auto">
            <div className="flex justify-center gap-6">
              {/* Card 1 */}
              <div className="service-data  bg-blackcolor border-gray-500 border  shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-orangecolor">
                <i className="text-4xl text-primary mb-4"></i>
                <p className=" text-gray-400 font-oswald text-xs hover:text-white px-6 py-16"><h3 className="text-xl  text-white font-semibold mb-2 font-oswald uppercase"><a href="service-detail.html">exercise cycle</a></h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a className="icon text-primary" href="service-detail.html">
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>

              {/* Card 2 */}
              <div className="service-data  bg-blackcolor border-gray-500 border  shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-orangecolor">
                <i className="flaticon-gym-equipment text-4xl text-primary mb-4"></i>
                <p className=" text-gray-400 font-oswald text-xs hover:text-white px-6 py-16"><h3 className="text-xl  text-white font-semibold mb-2 font-oswald uppercase "><a href="service-detail.html">Expert Trainers</a></h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a className="icon text-primary" href="service-detail.html">
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>

              {/* Card 3 */}
              <div className="service-data  bg-blackcolor border-gray-500 border  shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-orangecolor">
                <i className="flaticon-gym-equipment text-4xl text-primary mb-4"></i>
                <p className=" text-gray-400 font-oswald text-xs hover:text-white px-6 py-16"><h3 className="text-xl  text-white font-semibold mb-2 font-oswald uppercase"><a href="service-detail.html">Workout Schedule</a></h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a className="icon text-primary" href="service-detail.html">
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default WorkoutClassesSection;
