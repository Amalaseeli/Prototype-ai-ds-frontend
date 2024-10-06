import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"

function TrainTest() {
    const [trainPercentage, setTrainPercentage] = useState<number>(0)
    const [testPercentage, setTestPercentage] = useState<number>(0)
    const [error, setError] = useState('');
    const [accuracy, setAccuracy] = useState<number | null>(null)

    const handleTrainChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTrainPercentage(e.target.valueAsNumber)
        console.log(e.target.valueAsNumber)
    }

    const handleTestChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTestPercentage(e.target.valueAsNumber)
        console.log(e.target.valueAsNumber)
    }

    const onSplitModel = async () => {
        console.log("split button pushed")
        if ((trainPercentage || 0) + (testPercentage || 0) != 100) {
            setError("The sum of train and test percentages must be 100.");
            return;
        }
        try {
            const trainFraction = (trainPercentage || 0) / 100;
            const testFraction = (testPercentage || 0) / 100;
            const response = await axios.post("http://localhost:5000/split_data", {
                'trainPercentage': trainFraction,
                'testPercentage': testFraction
            });
            console.log(response);
            setError('');
        }
        catch (error) {
            console.error("Error splitting data:", error);
            setError("Error splitting data. Please try again.");
        }
    }

    const onTrainModel = async () => {
        console.log("Train button pushed")

        axios.post('http://localhost:5000/train_test_model', { trainPercentage })
            .then(response => {
                setAccuracy(response.data.accuracy);
                console.log('Model trained successfully:', response.data);
            })
            .catch(error => {
                console.error('Error training model:', error.response ? error.response.data : error.message);
            });
    }

    return (
        <>
            <div className="pl-20 pt-20 pr-20 text-white max-w-fit">
                <h1 className="text-3xl mb-10">
                    <strong>Train and Test</strong>
                </h1>

                <div className="flex gap-5 h-min-[60vh] text-slate-800">
                    <div className="p-4 w-4/12 bg-slate-200 rounded-xl">
                        <h1 className="font-bold text-xl text-slate-800">
                            Train
                        </h1>

                        <div className="flex text-lg h-10 mb-5 mt-5">
                            <label className="w-4/12">Train Percentage:</label>
                            <input className="w-8/12 pl-3 border border-slate-800 rounded-lg"
                                type="number"
                                max={100}
                                min={0}
                                onChange={handleTrainChange} />
                        </div>
                        <div className="flex h-10 mb-5 mt-5 text-lg ">
                            <label className="w-4/12">Test Percentage:</label>
                            <input className="w-8/12 pl-3 border border-slate-800 rounded-lg"
                                type="number"
                                max={100}
                                min={0}
                                onChange={handleTestChange} />
                        </div>
                        <button className="bg-slate-400 rounded-xl p-6  border border-slate-700 w-full text-xl border-10 mt-5 text-slate-800 "
                            onClick={onSplitModel}
                        >Split dataset
                        </button>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <button className="bg-slate-400 rounded-xl p-6  border border-slate-700 w-full text-xl border-10 mt-5 text-slate-800 "
                            onClick={onTrainModel}>
                            Train and Test dataset
                        </button>

                        {accuracy && <div>Model Accuracy: {accuracy}</div>}
                    </div>
                    <div className="grid gap-4 w-8/12 bg-slate-200 rounded-xl p-4 justify-center">
                        <h1 className="text-xl font-bold text-slate-800">Precision Recall</h1>
                    </div>
                </div>



            </div>
        </>
    )
}
export default TrainTest