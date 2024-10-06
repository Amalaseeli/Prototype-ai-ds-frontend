import axios from "axios";
import { ChangeEvent, ReactNode, useEffect, useState } from "react"

interface ModelDetails {
  type: string;
  description: string;
  hyperparameters: { [key: string]: string };
}

function model() {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [models, setModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [modelDetails, setModelDetails] = useState<ModelDetails>()
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>('')
  const [tempSelectedModel, setTempSelectedModel] = useState('')


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
      setSelectedModel('')
    }
    if (modelDetails && isSubmitted) {
      showPublic()
    }
  }, [selectedModel, modelDetails])

  const fetchModelDetails = (model: string) => {
    axios.post('http://localhost:5000/model_details', { 'model': [model] })
      .then((response) => {
        console.log(response.data)
        setModelDetails(response.data)
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error(err)
      })
  }
  const showPrivate = () => {
    console.log("Private button is clicked")

    setContent(
      <div className=" grid justify-center items-center text-white">
        There are not private models available for you!
      </div>
    )
  }

  const handleClick = () => {
    setIsSubmitted(true)
    if (!tempSelectedModel) {
      setError("Model is not available");
      return;
    }
    showPublic();
    axios
    .post("http://localhost:5000/models", { model: tempSelectedModel })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleModelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("changed")
    setSelectedModel(event.target.value)
    setTempSelectedModel(event.target.value)
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
          <button className="text-black border border-slate-800 pr-10 pl-10 h-10 bg-slate-300 rounded-lg"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
        {isSubmitted && modelDetails && (
          <div className="p-10 text-white">
            <h1>Hello!</h1>
            <h2>{selectedModel}</h2>
            <p>
              <strong>Type:</strong>{modelDetails.model.Type}
            </p>
            <p>
              <strong>Description:</strong>{modelDetails.model.description}
            </p>
            <p>
              <strong>Hyperparameters:</strong>
            </p>
            <ul>
              {Object.entries(modelDetails.model.hyperparameters).map(
                ([key, value]) => (
                  <li key={key} className="text-white">
                    <strong>{key}:</strong> {value}
                  </li>
                )
              )}
            </ul>
          </div>

        )}

        {error && <div style={{color:"red"}}>{error}</div>}
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