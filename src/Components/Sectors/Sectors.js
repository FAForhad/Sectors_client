import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Sectors = () => {

    const { data: sectors = [], refetch } = useQuery({
        queryKey: ['sectors'],
        queryFn: async () => {
            const res = await fetch(`https://task-1-server-sigma.vercel.app/sectors`)
            const data = await res.json()
            return data
        }
    })


    const [checked, setChecked] = useState(false)

    const handleChecked = () => {
        setChecked(!checked)
    }

    const storeData = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const sector = form.select.value;
        const checkbox = form.checkbox.value;
        const sectors = {
            name: name,
            sector: sector,
            term: checkbox
        }
        fetch('https://task-1-server-sigma.vercel.app/storeSector', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sectors)
        })
            .then(data => {
                console.log(data)
                toast.success('Your Post Added', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                })
                form.reset()
                refetch()
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <section id='sectors'>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <form onSubmit={storeData}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="Name"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Name
                                        </label>
                                        <input
                                            placeholder="John doe"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                            name="name"
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="sector"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Select Your Sector
                                        </label>
                                        <select
                                            required
                                            type="text"
                                            className="flex-grow w-full lg:h-52 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            name="select"
                                            size='10'

                                        >
                                            {
                                                sectors.map(sec => <option key={sec._id} value={sec.Sectors}> {sec.Sectors}</option>)
                                            }

                                        </select>
                                    </div>

                                    <div className="form-group form-check mb-6">
                                        <input
                                            onChange={handleChecked}
                                            type="checkbox"
                                            className=" appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-rose-600 checked:border-rose-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck1"
                                            value={
                                                checked ? 'Agree to terms' : 'Not Agreed'
                                            }
                                            name='checkbox'
                                        />
                                        <label className="form-check-label inline-block text-gray-800" for="exampleCheck1">Agree to terms</label>
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

                        <div className="relative flex items-center bg-gray-100 lg:mt-2 mt-24">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-4xl font-bold sm:text-5xl  text-rose-700">
                                    Sectors
                                </h2>
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Please enter your name and pick the Sectors you are currently involved in.

                                </h2>


                                <a
                                    href='#ensures'
                                    className="mt-8 inline-block rounded border border-rose-600 bg-rose-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"
                                >
                                    Ensures
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