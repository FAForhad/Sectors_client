import React from 'react';

const Banner = () => {
    return (
        <div>
            <section
                className="relative bg-[url(https://i.ibb.co/7RV2Bzv/beautiful-city-buildings-daytime-with-fog-23-2149444925-1.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75 sm:to-black/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <strong className="block font-extrabold text-rose-700">
                                Industry Sectors
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
                            In which market can we be a part of your future?  renowned industry competence ensures that every service it performs is carried out professionally and with the greatest possible added value for the client.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#sectors"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;