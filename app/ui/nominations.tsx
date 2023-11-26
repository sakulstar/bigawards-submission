import localFont from 'next/font/local'

import Submit from '../ui/submit'


const robotoRegular = localFont({
    src: "../fonts/Roboto/Roboto-Regular.ttf"
})

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN

function showNomations() {
    console.log("Showing nomations...")
}

function NomationCategories( {placeholderText} ) {
    return (
        <div className="bg-slate-700 rounded-xl px-2 pb-6 pt-3 mb-4 pr-20 max-sm:pr-0">
            <p className="capitalize text-xl w-64">general categories</p>
            <div className={robotoRegular.className}>
                <div className="flex text-center">
                    <div className="h-8 w-8 max-sm:h-6 max-sm:w-6 rounded-full bg-red-500 mr-1 my-auto"></div>
                    <p onClick={() => showNomations()} className="line-through my-2 max-sm:text-sm cursor-pointer">{placeholderText}</p>
                </div>
                <div className="flex text-center">
                    <div className="h-8 w-8 max-sm:h-6 max-sm:w-6 rounded-full bg-red-500 mr-1 my-auto"></div>
                    <p onClick={() => showNomations()} className="my-2 max-sm:text-sm cursor-pointer">{placeholderText}</p>
                </div>
                <div className="flex text-center">
                    <div className="h-8 w-8 max-sm:h-6 max-sm:w-6 rounded-full bg-red-500 mr-1 my-auto"></div>
                    <p onClick={() => showNomations()} className="my-2 max-sm:text-sm cursor-pointer">{placeholderText}</p>
                </div>
                <div className="flex text-center">
                    <div className="h-8 w-8 max-sm:h-6 max-sm:w-6 rounded-full bg-red-500 mr-1 my-auto"></div>
                    <p onClick={() => showNomations()} className="my-2 max-sm:text-sm cursor-pointer">{placeholderText}</p>
                </div>
            </div>
        </div>
    )
}

export default function nominations() {
    return (
        <div className="overflow-hidden flex min-h-screen items-center justify-center">
            <div className="bg-dark-blue max-w-[434px] min-w-[434px] max-h-[528px] min-h-[528px] max-sm:max-w-[350px] max-sm:min-w-[350px] px-10 py-6 sm:mr-16 rounded-3xl shadow-2xl overflow-hidden">
                <p className="capitalize text-4xl pt-8 pb-6 max-sm:pt-5 max-sm:pb-4 text-center">nominations</p>
                <div className="overflow-scroll overflow-x-hidden overflow-y-auto scrollbar h-96">
                    <NomationCategories placeholderText={"I Miss the old Atrioc Award"} />
                    <NomationCategories placeholderText={"I Miss the old Atrioc Award"} />
                    <NomationCategories placeholderText={"I Miss the old Atrioc Award"} />
                    <NomationCategories placeholderText={"I Miss the old Atrioc Award"} />
                </div>
            </div>
            <Submit />
        </div>
    )
}