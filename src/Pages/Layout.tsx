import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar"

function Layer(){
    return<>
    <div className="bg-slate-800  flex w-[100%]">
        <div className="w-[15vw]">
            <Sidebar/>
        </div>
        <div className="w-[85-vw] min-h-[100vh]">
            <Outlet/>
        </div>
    </div>
    </>
}
export default Layer