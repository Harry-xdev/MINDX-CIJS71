import './button.css'
import { useState } from 'react'

export const AddExpenseButton = () => {
    const [showForm, setShowForm] = useState[false]
    const handleShowForm = () => {
        setShowForm(true)
    }
    return (
        <div>
            <button className='button'>
                
                {
                    showForm ? <div>Form</div> : <button onClick={handleShowForm}>Add new expense</button>
                }
                
            </button>
        </div>
    )
}

