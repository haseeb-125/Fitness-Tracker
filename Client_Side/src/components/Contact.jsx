import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CiLocationOn, CiMobile3 } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_itsnqkh', 'template_lhdgjdh', form.current, {
            publicKey: 'K_mWsB-1kMnq7B2G0',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                // Optionally, you can add a success message here or clear the form
                e.target.reset(); // Clear form after successful submission
            },
            (error) => {
                console.log('FAILED...', error.text);
                // Optionally, you can add an error message here
            }
        );
    };

    return (
        <section className="gap contact-form-2 py-16 bg-black">
            <div className="heading text-center mb-12">
                <figure className="mx-auto mb-4">
                    <img src="src/assets/heading-icon.png" alt="Heading Icon" className="mx-auto" />
                </figure>
                <span className="block text-gray-500 font-oswald text-xl">Frequently asked question</span>
                <h2 className="text-4xl font-bold text-white mt-2 font-oswald">
                    Hello Guys Have Question? FEEL FREE TO ASK US ANYTHING
                </h2>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:w-7/12 w-full mb-8 lg:mb-0">
                        <div className="data bg-black p-8">
                            <p className="text-gray-700 mb-6 font-oswald">
                                Have questions or want to chat? Fill out our contact form, and we’ll put you in touch with the right people.
                            </p>
                            <form ref={form} onSubmit={sendEmail} className="content-form">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Complete Name"
                                        className="w-full p-3 border border-gray-900 bg-black text-gray-700 font-oswald focus:border-gray-900 focus:ring-0 focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Email Address"
                                        className="w-full p-3 border border-gray-900 bg-black text-gray-700 font-oswald focus:border-gray-900 focus:ring-0 focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="number"
                                        name="user_phone"
                                        placeholder="Phone No"
                                        className="w-full p-3 border border-gray-900 bg-black text-gray-700 font-oswald focus:border-gray-900 focus:ring-0 focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        name="message"
                                        placeholder="Question / Message?"
                                        className="w-full p-3 border border-gray-900 bg-black text-gray-700 font-oswald focus:border-gray-900 focus:ring-0 focus:outline-none"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    value="Send"
                                    className="w-full py-3 px-4 bg-red-600 text-white border border-transparent rounded-none font-oswald font-semibold hover:border-red-500 hover:bg-black transition-all duration-300 focus:outline-none"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="lg:w-5/12 w-full">
                        <div className="info bg-blackcolor p-8 shadow-lg">
                            <ul className="contact space-y-12">
                                {/* Address Section */}
                                <li className="flex items-center">
                                    <CiLocationOn className="text-red-500 text-2xl mr-4" />
                                    <div>
                                        <h3 className="text-white text-xl font-oswald mb-2">Address:</h3>
                                        <p className="text-gray-500">65 Allerton Street 901 N Pitt Str, USA</p>
                                    </div>
                                </li>

                                {/* Border and Space Section */}
                                <li className="relative">
                                    <div className="border-t border-gray-500 mt-12"></div>
                                </li>

                                {/* Telephone Section with margin */}
                                <li className="flex items-center mt-12">
                                    <CiMobile3 className="text-red-500 text-2xl mr-4" />
                                    <div>
                                        <h3 className="text-white text-xl font-oswald mb-2">Telephone:</h3>
                                        <a href="callto:(+380)503184707" className="text-gray-500 font-oswald">(+380) 50 318 47 07</a>
                                        <br />
                                        <a href="callto:(+380)503184707" className="text-gray-500 font-oswald">(+182) 50 318 47 07</a>
                                    </div>
                                </li>

                                {/* Border and Space Section between Telephone and Email */}
                                <li className="relative mt-12">
                                    <div className="border-t border-gray-500 mt-12"></div>
                                </li>

                                {/* Email Section */}
                                <li className="flex items-center mt-12">
                                    <MdOutlineMailOutline className="text-red-500 text-2xl mr-4" />
                                    <div>
                                        <h3 className="text-white text-xl font-oswald mb-2">Email:</h3>
                                        <a href="mailto:username@domain.com" className="text-gray-500 font-oswald">username@domain.com</a>
                                        <br />
                                        <a href="mailto:username@domain.com" className="text-gray-500 font-oswald">username@domain.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
