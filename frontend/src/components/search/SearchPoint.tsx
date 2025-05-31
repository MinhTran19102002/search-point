'use client'

import { useForm } from "react-hook-form";
import { useState } from "react";
import { getPoint } from "@/utils/action/point.action";


const SearchPoint = (props: any) => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const { onSendData, onLoading } = props
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const onSubmit = async (data: any) => {
        onLoading(true)
        try {
            const res = await getPoint(data.registrationg_number)

            if (res?.error) {
                // 
                return
            }
            if (res?.data) {
                // return res?.data?.data
                onSendData(res?.data)
            }
        } catch (error) {


        } finally {
            // await delay(10000);
            onLoading(false);
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold mb-4">User Registration</h2>

            <form className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}>

                <div >
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Registration Number:
                    </label>
                    <input
                        type="text"
                        {...register('registrationg_number', {
                            required: 'Vui lòng nhập mã đăng ký',
                            pattern: {
                                value: /^\d{8}$/,
                                message: 'Mã đăng ký phải gồm đúng 8 chữ số',
                            },
                        })}
                        placeholder="Enter registration number"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <div className="h-5.5 flex items-center justify-center">
                        {errors.registrationg_number && (
                            <p className="text-red-500 text-sm">
                                {errors.registrationg_number.message as string}
                            </p>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );

}

export default SearchPoint;
