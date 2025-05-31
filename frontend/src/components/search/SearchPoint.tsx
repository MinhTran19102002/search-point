'use client'

import { useForm } from "react-hook-form";
import { useState } from "react";
import { getPoint } from "@/utils/action/point.action";
import { AlertCircle, CreditCard, Send, User } from "lucide-react";


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
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-4 w-full max-w-md mx-auto">
            {/* Header with icon */}
            <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center  shadow-lg">
                    <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 ">User Registration</h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                        <CreditCard className="w-4 h-4 text-gray-500" />
                        Registration Number
                    </label>

                    <div className="relative">
                        <input
                            type="text"
                            {...register('registrationg_number', {
                                required: 'Vui lòng nhập mã đăng ký',
                                pattern: {
                                    value: /^\d{8}$/,
                                    message: 'Mã đăng ký phải gồm đúng 8 chữ số',
                                },
                            })}
                            placeholder="Enter 8-digit registration number"
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            <CreditCard className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Error message container */}
                    <div className="min-h-[24px] flex items-center">
                        {errors.registrationg_number && (
                            <div className="flex items-center  text-red-500 text-sm animate-pulse">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.registrationg_number.message as string}</span>
                            </div>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center group"
                >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    Submit Registration
                </button>
            </form>
        </div>
    );

}

export default SearchPoint;
