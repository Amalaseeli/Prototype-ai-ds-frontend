import { Link } from "react-router-dom"

function Demo() {
    return (<>
        <div className=" justify-center  flex-w-[100vw]  bg-slate-800 xl:justify-start ">
            {/* <div className="flex justify-center p-7 xl:p-10 xl:justify-start"> */}
            <div className="flex justify-center p-7 px-10 xl:p-10 2xl:p-10 xl:justify-start 2xl:justify-start">
                <div className="">
                    
                    <p className="text-2xl pb-10 text-white">Welcome to Refonte Prototype! Chose your exercise!</p>
                    
                    <div className="flex justify-center xl:justify-start 2xl:justify-start">
                        <div className="grid gap-20 grid-rows-2 xl:grid-cols-2 2xl:grid-cols-2">
                        <Link className="bg-slate-600 xl:p-10 p-2 border rounded-xl w-60 h-60 flex flex-col justify-center items-center" to={'/Summary'} >
                        <p className="text-white text-3xl p-5">Magical codex</p>
                        </Link>
                        <Link className="bg-slate-600 xl:p-10 p-2 border rounded-xl w-60 h-60 flex flex-col justify-center items-center" to={'/Kernel'} >
                        <p className="text-white text-3xl p-5">Kernel</p>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </>
    )
}
export default Demo