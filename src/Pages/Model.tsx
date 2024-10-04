import axios from "axios";
import { ChangeEvent, ReactNode, useEffect, useState } from "react"

function model() {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [models, setModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>('');

  const showPrivate = () => {
    console.log("Private button is clicked")

    setContent(
      <div className=" grid justify-center items-center text-white">
        There are not private models available for you!
      </div>
    )
  }
  useEffect(() => {
    axios.get('http://localhost:5000/models')
      .then(response => {
        setModels(response.data.models)
        console.log("List of models", response.data.models)
      })
      .catch(error => {
        console.error("No models available", error)
      });

  }, [])

  useEffect(() => {
    if (selectedModel) {
      fetchModelDetails(selectedModel)
    }
  }, [selectedModel])

  const fetchModelDetails = (model: string) => {
    axios.post('http://localhost:5000/model_details', {'model': [model]})
    .then((response) => {
        console.log(response.data)
    })
    .catch((err) => {
        console.error(err)
    })
  }
  
  const handleClick = () => {
    console.log("button is clicked")
  }

  const handleModelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("changed")
    setSelectedModel(event.target.value)
    console.log('Selected Model:', event.target.value)

  }
  const showPublic = () => {
    console.log("Public button is clicked!")
    setContent(
      <div>
        <div>
          <select onChange={handleModelChange} className="text-black text-xl w-[50%] h-10 m-5 rounded-lg bg-slate-200 pl-3 border border-slate-800" >
            <optgroup label="Choose a model">
              <option value="" disabled hidden selected>Select a model</option>
            </optgroup>

            {models.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))

            }

          </select>
          <button className="text-black border border-slate-800 pr-10 pl-10 h-10 bg-slate-300 rounded-lg" onClick={handleClick}>Submit</button>
        </div>

      </div>
    )

  };
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