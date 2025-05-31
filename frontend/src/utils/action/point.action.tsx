'use server'
import { sendRequest } from "../api";


export async function getPoint(sbd: string) {
    try {
        const r = await sendRequest<IBackendRes<IPoint>>({
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_BACKEND}/diem-thi`,
            param: sbd
        })
        return r
    } catch (error) {
        // console.log(error.message)
    }
}

export async function getStats(subject: string) {
    try {
        const r = await sendRequest<IBackendRes<IStats>>({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_BACKEND}/thong-ke`,
            body: { subject }
        })
        return r
    } catch (error) {
        // console.log(error.message)
    }
}


export async function getTop10(code: string) {
    try {
        const r = await sendRequest<IBackendRes<IPoint[]>>({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_BACKEND}/top10`,
            body: { code }
        })
        return r
    } catch (error) {
        // console.log(error.message)
    }
}