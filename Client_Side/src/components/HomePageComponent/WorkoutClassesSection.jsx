import React from 'react';
import logoicon from "../../assets/icon.png";
import { LuDumbbell } from "react-icons/lu";
import { GiBodyBalance } from "react-icons/gi";
import { MdAccessTime } from "react-icons/md";
import { Link } from 'react-router-dom';
const WorkoutClassesSection = () => {
  return (
    <>
      <div className="py-16 bg-black">
        <section className="gap-10 text-center">
          <div className="mb-8">
            <figure className="inline-block mb-4">
              <img src={logoicon} alt="Heading Icon" className="w-12 h-12 mx-auto" />
            </figure>
            <span className="block text-xs font-semibold font-oswald text-gray-400">Build your body strong</span>
            <h2 className="text-3xl font-bold text-white font-oswald">Workout Classes</h2>
          </div>

          <div className="container mx-auto">
            <div className="grid  m-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="service-data py-10 bg-black border-gray-500 border shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-orangecolor group">
                {/* Icon */}
                <LuDumbbell className='text-orangecolor text-2xl m-auto translate-y-10 transition-colors duration-300 group-hover:text-white' />

                {/* Description */}
                <div className="px-6 py-16">
                  <h3 className="text-xl text-white font-semibold mb-2 font-oswald uppercase">
                    <Link>exercise cycle</Link>
                  </h3>
                  <p className="text-gray-400 font-oswald text-xs transition-colors duration-300 group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="service-data py-10 bg-black border-gray-500 border shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-orangecolor group">
                {/* Icon */}
                <GiBodyBalance className='text-orangecolor text-2xl m-auto translate-y-10 transition-colors duration-300 group-hover:text-white' />

                {/* Description */}
                <div className="px-6 py-16">
                  <h3 className="text-xl text-white font-semibold mb-2 font-oswald uppercase">
                    <Link>Expert Trainers</Link>
                  </h3>
                  <p className="text-gray-400 font-oswald text-xs transition-colors duration-300 group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="service-data py-10 bg-black border-gray-500 border shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-orangecolor group">
                {/* Icon */}
                <MdAccessTime className='text-orangecolor text-2xl m-auto translate-y-10 transition-colors duration-300 group-hover:text-white' />

                {/* Description */}
                <div className="px-6 py-16">
                  <h3 className="text-xl text-white font-semibold mb-2 font-oswald uppercase">
                    <Link>Workout Schedule</Link>
                  </h3>
                  <p className="text-gray-400 font-oswald text-xs transition-colors duration-300 group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  );
}

export default WorkoutClassesSection;
