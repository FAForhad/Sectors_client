import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AddedSectors = () => {

    const { data: allSectors = [], refetch } = useQuery({
        queryKey: ['allSectors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allSectors`)
            const data = await res.json()
            return data
        }
    })
    refetch()

    return (
        <div>
            <section class="">
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-3xl font-bold sm:text-4xl">It all adds up to The New Equation</h2>

                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {
                            allSectors.map(sector => <div
                                class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-rose-500/10 hover:shadow-rose-500/10"
                                href="/services/digital-campaigns"
                            >
                                <div className='flex flex-col items-end'>
                                    <button className='px-2 border border-rose-500 rounded hover:bg-rose-500 hover:text-white'>Update</button>
                                </div>

                                <h2 class="mt-4 text-xl font-bold text-rose-500">{sector?.name}</h2>

                                <p class="mt-1 text-md text-black">
                                    {sector.sector}
                                </p>
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