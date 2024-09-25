import React from 'react'
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import team3 from '../../assets/team3.png'
import team4 from '../../assets/team4.png'


export const MeetTrainerSection = () => {
    return (
        <>
            <section className="py-10 lg:py-20 px-8 bg-black">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row ">
                        <div className="lg:w-1/2 mb-6 lg:mb-0">
                            <div className="lg:text-left">
                                <span className="text-gray-500 text-xs md:text-sm lg:text-3xl font-oswald">Meet Experts Trainers</span>
                                <h2 className="text-3xl lg:text-5xl font-oswald text-white mt-2">Expert Coaches</h2>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="flex justify-between gap-6">
                            {/* Team Member 1 */}
                            <div className="team-data item group flex flex-col justify-between w-full md:w-1/4 border border-gray-400 p-4 rounded-lg">
                                <div>
                                    <h3 className="text-xl md:text-4xl text-white font-oswald">Gorden Qlark</h3>
                                    <p className="text-xs md:text-sm lg:text-xl font-oswald text-gray-500">CROSSFIT COACH</p>
                                    <div className="team-social-media space-x-3 mt-2">
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="team-image mt-4">
                                    <figure className="overflow-hidden rounded-lg">
                                        <img
                                            src={team1}
                                            alt="team-1"
                                            className="h-full w-full object-cover filter grayscale transition duration-300 ease-in-out group-hover:filter-none"
                                        />
                                    </figure>
                                </div>
                            </div>

                            {/* Repeat for other team members */}
                            <div className="team-data item group flex flex-col justify-between w-full md:w-1/4 border border-gray-400 p-4 rounded-lg">
                                <div>
                                    <h3 className="text-xl md:text-4xl text-white font-oswald">Robert Jessi</h3>
                                    <p className="text-xs md:text-sm lg:text-xl font-oswald text-gray-500">BODYBUILDING COACH</p>
                                    <div className="team-social-media space-x-3 mt-2">
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="team-image mt-4">
                                    <figure className="overflow-hidden rounded-lg">
                                        <img
                                            src={team3}
                                            alt="team-3"
                                            className="h-full w-full object-cover filter grayscale transition duration-300 ease-in-out group-hover:filter-none"
                                        />
                                    </figure>
                                </div>
                            </div>

                            <div className="team-data item group flex flex-col justify-between w-full md:w-1/4 border border-gray-400 p-4 rounded-lg">
                                <div>
                                    <h3 className="text-xl md:text-4xl text-white font-oswald">Moniqa Linda</h3>
                                    <p className="text-xs md:text-sm lg:text-xl font-oswald text-gray-500">FITNESS COACH</p>
                                    <div className="team-social-media space-x-3 mt-2">
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="team-image mt-4">
                                    <figure className="overflow-hidden rounded-lg">
                                        <img
                                            src={team2}
                                            alt="team-2"
                                            className="h-full w-full object-cover filter grayscale transition duration-300 ease-in-out group-hover:filter-none"
                                        />
                                    </figure>
                                </div>
                            </div>

                            <div className="team-data item group flex flex-col justify-between w-full md:w-1/4 border border-gray-400 p-4 rounded-lg">
                                <div>
                                    <h3 className="text-xl md:text-4xl text-white font-oswald">Willimes Haniq</h3>
                                    <p className="text-xs md:text-sm lg:text-xl font-oswald text-gray-500">YOGA COACH</p>
                                    <div className="team-social-media space-x-3 mt-2">
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-orangecolor transition-all duration-500">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="team-image mt-4">
                                    <figure className="overflow-hidden rounded-lg">
                                        <img
                                            src={team4}
                                            alt="team-4"
                                            className="h-full w-full object-cover filter grayscale transition duration-300 ease-in-out group-hover:filter-none"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
