import { Link } from "react-router-dom";

function AcademicTab(){
    const handleSubmit = () => {
        
    }
    return(
        <div className="">
            <form onSubmit={handleSubmit}>
                <select className="mb-5 py-3 px-4 text-xl" >
                    <option className="text-xl">Select Class</option>
                    <option value="class1" className="text-xl">Select Class 1</option>
                    <option value="class2" className="text-xl">Select Class 2</option>
                    <option value="class3" className="text-xl">Select Class 3</option>
                    <option value="class4" className="text-xl">Select Class 4</option>
                    <option value="class5" className="text-xl">Select Class 5</option>
                    <option value="class6" className="text-xl">Select Class 6</option>
                    <option value="class7" className="text-xl">Select Class 7</option>
                </select>
                <button className="block bg-gray-500 py-2 px-4 text-white text-2xl">Generate List</button>
            </form>
            <div className="mt-8">
                <table className="table-auto p-5">
                        <thead className="border-solid border-2 border-blue-500 p-3">
                            <tr>
                            <th className="border-solid border-2 border-blue-500 px-3">Academic Document</th>
                            <th className="border-solid border-2 border-blue-500 pr-12">Link</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="border-solid border-2 border-blue-500">
                            <td className="border-solid border-2 border-blue-500 pr-80">Class Report 1</td>
                            <td className="border-solid border-2 border-blue-500 pr-12"><Link to="">Link</Link></td>
                            </tr>
                            <tr className="bg-emerald-300">
                            <td className="border-solid border-2 border-blue-500 pr-80">Assessment 2</td>
                            <td className="border-solid border-2 border-blue-500 pr-12"><Link to="">Link</Link></td>
                            </tr>
                            <tr>
                            <td className="border-solid border-2 border-blue-500 pr-70">Performance Report</td>
                            <td className="border-solid border-2 border-blue-500 pr-12"><Link to="">Link</Link></td>
                            </tr>
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default AcademicTab;