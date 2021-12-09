import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";

function AdminstrationTab (){
    const [password, setPassword] = useState("")

    const handleChange = (event) => {
       const newPassword = event.target.value;
       setPassword(newPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', password);
        axios.post('//adrees', data)
            .then(data => console.log('Success', data))
            .then(error => console.log('Error',error))
    }

    // console.log(password)
    return(
        <div className="">
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleChange}
            className="py-2 px-4 text-xl mb-5"
            value={password}
            type="password" 
            name="password" 
            placeholder="Enter Security Password" />
               
            <button className="block bg-gray-500 py-2 px-4 text-white text-2xl">Submit and Generate</button>
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
                        <td className="border-solid border-2 border-blue-500 pr-50">Employment Letters</td>
                        <td className="border-solid border-2 border-blue-500 pr-12"><Link to="">Link</Link></td>
                        </tr>
                        <tr className="bg-emerald-300">
                        <td className="border-solid border-2 border-blue-500 pr-80">Task Form</td>
                        <td className="border-solid border-2 border-blue-500 pr-12"><Link to="">Link</Link></td>
                        </tr>
                        <tr>
                        <td className="border-solid border-2 border-blue-500 pr-70">Joining Letter</td>
                        <td className="border-solid border-2 border-blue-500 pr-12"><Link to="">Link</Link></td>
                        </tr>
                    </tbody>
            </table>
        </div>
    </div>
    )
}

export default AdminstrationTab;