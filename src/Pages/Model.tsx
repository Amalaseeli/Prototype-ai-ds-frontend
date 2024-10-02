import { ReactNode, useState } from "react"

function model() {
  const [content, setContent] = useState<ReactNode | null>(null);

  const showPrivate = () => {
    console.log("Private button is clicked")

    setContent(
      <div className=" grid justify-center items-center text-white">
        There are not private models available for you!
      </div>
    )
  }
  const showPublic = () => { };
  return <>
    <div >
      <h1 className="text-gray-50 text-3xl p-20"> Models</h1>
      <div className="flex">
        <button className="rounded-l-lg  pl-5 border border-slate-500 pr-5 pt-5 pb-3 text-white hover:bg-slate-500"
          onClick={showPrivate}
        >Private model</button>

        <button className="rounded-r-lg  pl-5 border border-slate-500 pr-5 pt-5 pb-3 text-white hover:bg-slate-500"
          onClick={showPublic}
        >Public model</button>
      </div>
      {content}
    </div>
  </>
}
export default model