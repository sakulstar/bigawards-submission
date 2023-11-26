import localFont from 'next/font/local'
import { useState } from 'react'

import Submit from '../ui/submit'

const robotoRegular = localFont({
    src: "../fonts/Roboto/Roboto-Regular.ttf"
})

const categories =  require("../lib/categories.json")

function NomationCategories( { setTitleVar, setDescriptionVar, setColorVar}) {
    let colors: any = []
    let index: any = -1
    let nominationChooseDivBackgroundColor: any
    return (
        <div>
            {categories["data"].map((category: any, i: any) => {
                // colors.push(category["attributes"]["color"])
                colors.push(`#${category["attributes"]["color"]}`)
                return (
                    <div key={i} className="bg-slate-700 rounded-xl px-2 pb-6 pt-3 mb-4 pr-20 max-sm:pr-0">
                        <p className="capitalize text-xl w-64">{category["attributes"]["title"]}</p>
                        <div className={robotoRegular.className}>
                            {category["attributes"]["categories"]["data"].map((category: any, i: any) => {
                                if (i === 0) {
                                    index += 1
                                }
                                // colorVar = `bg-[${color}]`
                                // let colorVar = `bg-[#353535]`
                                console.log(index)
                                console.log(i)
                                console.log(colors)
                                return (
                                    <div key={i} className="flex text-center">
                                        <div id="nominationChooseDiv" style={{background: colors[index]}} className={`nominationsChooseDiv h-8 w-8 max-sm:h-6 max-sm:w-6 rounded-full mr-1 my-auto`}></div>
                                        <p onClick={() => {
                                            setTitleVar(category["attributes"]["title"])
                                            setDescriptionVar(category["attributes"]["description"])
                                            // let submitColorIndex = category["id"] - 1
                                            nominationChooseDivBackgroundColor = document.getElementById("nominationChooseDiv")?.style.backgroundColor // supposed to give specified color but I couldn't get it to work today.
                                            setColorVar(nominationChooseDivBackgroundColor)
                                        }} 
                                        className="my-2 max-sm:text-sm cursor-pointer">{category["attributes"]["title"]}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default function nominations() { 
    const [titleVar, setTitleVar] = useState("Pick a nomination!")
    const [descriptionVar, setDescriptionVar] = useState("")
    const [colorVar, setColorVar] = useState("#353535")

    return (
        <div id="nomationsDiv" className="overflow-hidden flex min-h-screen items-center justify-center">
            <div className="bg-dark-blue max-w-[434px] min-w-[434px] max-h-[528px] min-h-[528px] max-sm:max-w-[350px] max-sm:min-w-[350px] px-10 py-6 sm:mr-16 rounded-3xl shadow-2xl overflow-hidden">
                <p className="capitalize text-4xl pt-8 pb-6 max-sm:pt-5 max-sm:pb-4 text-center">nominations</p>
                <div className="overflow-scroll overflow-x-hidden overflow-y-auto scrollbar h-96">
                    <NomationCategories  setTitleVar={setTitleVar} setDescriptionVar={setDescriptionVar} setColorVar={setColorVar}/>
                </div>
            </div>
            <Submit title={titleVar} description={descriptionVar} color={colorVar} />
        </div>
    )
}