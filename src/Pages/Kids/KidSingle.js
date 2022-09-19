import React from 'react';
import { useState } from "react";
import img from "../../Assets/Images/audio-books.jpg";
import { AiFillStar } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loader from '../../SharedCompo/Loader/Loader';

const KidSingle = () => {
    const [currentValue, setCurrentValue] = useState(2);
    const stars = Array(5).fill(0);
    const handleClick = (value) => {
        setCurrentValue(value);
        console.log(currentValue);
    };
    const { bookId } = useParams()
    console.log(bookId)
    const url = ` https://books-store-server.vercel.app/api/v1/books/kidBook/${bookId}`
    const { isLoading, data } = useQuery('kidSingle', () => fetch(url)
        .then((res) => res.json())
        .catch((err) => {
            console.log(err)
        })
    )
    console.log(data)
    if (isLoading) {
        <Loader />
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(currentValue);
    };
    return (
        <>
            <div className="h-screen w-full  bg-slate-200 flex items-center">
                <div className="relative  bg-white  max-w-4xl mx-auto z-10 shadow-lg">
                    {/* <div className="text-right w-full bg-white p-2"> */}

                    <button className="absolute z-20 right-3 top-3">
                        <ImCross></ImCross>
                    </button>

                    <div className="flex flex-col lg:flex-row h-full items-stretch">
                        <div className="Review-Book basis-1/3 w-full pl-2 py-10 pr-0 h-full mx-auto">
                            <img
                                className=" mx-auto h-3/4 w-8/12 md:w-9/12 lg:w-11/12"
                                src={data?.img} alt=""
                            />
                            <div className="text-sm mt-5 mx-auto">
                                <h1 className="mx-auto">
                                    {data?.title}
                                </h1>
                            </div>
                        </div>

                        <div className="Review-Form items-stretch flex flex-col h-full overflow-hidden w-full relative lg:bg-pink-100 pb-10 px-5 md:px-10 lg:px-0">
                            <div className="bg-white pb-3 w-full pt-10">
                                <h1 className="text-xl font-semibold">
                                    My Review for Court of the Vampire Queen (B&N Exclusive
                                    Edition)
                                </h1>
                                <h1 className="text-sm mt-2">
                                    Required fields are marked with *
                                </h1>
                            </div>
                            <div className="bg-slate-50 border-y py-4 flex space-x-4 items-center mb-3">
                                <h2 className="text-sm font-medium">Overall Rating*</h2>
                                {stars.map((e, i) => {
                                    return (
                                        <AiFillStar
                                            key={i}
                                            className={`w-4 text-xl cursor-pointer ${currentValue > i ? "text-pink-600" : "text-gray-300"
                                                }`}
                                            onClick={() => handleClick(i + 1)}
                                        />
                                    );
                                })}
                            </div>

                            <form className="max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex w-full mx-3 gap-2 mb-3">
                                    <input
                                        className="input-bordered border border-1 outline-0 focus:border-pink-600 py-3 px-2 placeholder-black w-full "
                                        defaultValue=""
                                        {...register("Email")}
                                        placeholder="Email"
                                        type="email"
                                    />
                                    <input
                                        className="input-bordered border border-1  py-3 outline-0 focus:border-pink-600 px-2 placeholder-black w-full "
                                        defaultValue=""
                                        {...register("User Name", { required: true })}
                                        placeholder="Your Name*"
                                        type="text"
                                    />
                                </div>
                                <div className="">
                                    <textarea
                                        className="input-bordered border border-1 mx-3 my-2 py-3 outline-0 focus:border-pink-600 px-6 w-full placeholder-black "
                                        placeholder="Your Review*"
                                        {...register("Your Review", { required: true })}
                                        rows="5"
                                    ></textarea>
                                </div>
                                <div className="mx-3 mt-1">
                                    <button className="px-12 py-3 text-white bg-blue-600 text-sm font-medium hover:bg-pink-600">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KidSingle;