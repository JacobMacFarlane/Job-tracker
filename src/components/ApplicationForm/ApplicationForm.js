import React, {useState} from "react";

const ApplicationForm = ({ onSubmit }) => {
    const [companyName, setCompanyName] = useState('')
    const [role,setRole] = useState('')
    const [date,setDate] = useState('')
    const [linkedInContact,setLinkedInContact] = useState('')

    const resetInputs = () => {
        setCompanyName('')
        setRole('')
        setDate('')
        setLinkedInContact('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const applicationData = {
            companyName,
            role,
            date,
            linkedInContact,
            comments: ''
        }
        onSubmit(applicationData)
        resetInputs()
    }
    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
            <div className="mb-4">
                <label classname="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                    Company Name
                </label>
                <input 
                type="text" 
                name="companyName" 
                id="companyName" 
                value={companyName} 
                onChange={(e) => setCompanyName(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                />
            </div>
            <div className="mb-4">
                <label classname="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                    Role
                </label>
                <input 
                type="text" 
                name="role" 
                id="role" 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                />
            </div>
            <div className="mb-4">
                <label classname="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                    Date
                </label>
                <input 
                type="date" 
                name="date" 
                id="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                />
            </div>
            <div className="mb-4">
                <label classname="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedInContact">
                    LinkedIn Connection
                </label>
                <input 
                type="text" 
                name="linkedInContact" 
                id="linkedInContact" 
                value={linkedInContact} 
                onChange={(e) => setLinkedInContact(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
                Submit
            </button>
        </form>
    )
}

export default ApplicationForm