import './form.css'

export const AddingForm = () => {
    return (
        <form className='form'>
            <label for='add-expense'>New expense</label>
            <input type='text' className='input-box' id='add-expense'></input>

            <label for='amount'>Amount</label>
            <input type='number' className='input-box' id='amount'></input>

            <label for='add-expense'>Date</label>
            <input type='date' className='input-box' id='amount'></input>
        </form>
    )
}