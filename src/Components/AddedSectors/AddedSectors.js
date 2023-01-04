import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const AddedSectors = () => {


    const [modalSheet, setModalSheet] = useState(null)



    const { data: allSectors = [], refetch } = useQuery({
        queryKey: ['allSectors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allSectors`)
            const data = await res.json()
            return data
        }
    })
    refetch()


    const { data: sectors = [] } = useQuery({
        queryKey: ['sectors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sectors`)
            const data = await res.json()
            return data
        }
    })



    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const sector = form.select.value;
        console.log(name, sector, modalSheet._id)
    }



    return (
        <div>
            <section id='ensures'>
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-3xl font-bold sm:text-4xl uppercase">All adds up to The New Equation</h2>

                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {
                            allSectors.map(sector => <div
                                class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-rose-500/10 hover:shadow-rose-500/10"
                                href="/services/digital-campaigns"
                            >
                                <div className='flex flex-col items-end'>
                                    <button className='px-4 py-1 border border-rose-500 rounded hover:bg-rose-500 hover:text-white' data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={() => { setModalSheet(sector) }}>Edit</button>
                                </div>

                                <h2 class="mt-4 text-xl font-bold text-rose-500">{sector?.name}</h2>

                                <p class="mt-1 text-md text-black">
                                    {sector.sector}
                                </p>


                                {
                                    modalSheet && <form onSubmit={handleUpdate}>
                                        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                                            <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                                                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                                        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                                            {modalSheet?.name}
                                                        </h5>
                                                        <button type="button"
                                                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body relative p-4">
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



                                                    </div>
                                                    <div
                                                        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                                        <button type="button"
                                                            class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                                                            data-bs-dismiss="modal">
                                                            Close
                                                        </button>
                                                        <button type="submit"
                                                            class="inline-block px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                }







                            </div>)
                        }
                    </div>

                    <div class="mt-12 text-center">

                    </div>
                </div>

            </section>
        </div>
    );
};

export default AddedSectors;