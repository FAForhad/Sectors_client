import React from 'react';

const Sectors = () => {
    return (
        <div>
            <section id='sectors'>
                <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2">
                        <div class="relative z-10 lg:py-16">
                            <div class="relative h-64 sm:h-80 lg:h-full">
                                <form>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Name
                                        </label>
                                        <input
                                            placeholder="John doe"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="firstName"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="john.doe@example.org"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="sector"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Your Sector
                                        </label>
                                        <select
                                            placeholder="john.doe@example.org"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        >
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline  border-rose-600 bg-rose-600 py-3 text-sm hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="relative flex items-center bg-gray-100">
                            <span
                                class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div class="p-8 sm:p-16 lg:p-24">
                                <h2 class="text-4xl font-bold sm:text-5xl mt-14 text-rose-700">
                                    Sectors
                                </h2>
                                <h2 class="text-2xl font-bold sm:text-3xl">
                                    Please enter your name and pick the Sectors you are currently involved in.

                                </h2>


                                <a
                                    class="mt-8 inline-block rounded border border-rose-600 bg-rose-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Sectors;