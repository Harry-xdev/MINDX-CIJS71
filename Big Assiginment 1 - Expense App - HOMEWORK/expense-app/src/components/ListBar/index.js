import './listbar.css'

export const ListBar = (props) => {
    return (
        <div className='shopping-bar'>
            <div className='date-box'>{props.dateBox}
                <div className='month'>{props.month}</div>
                <div className='year'>{props.year}</div>
                <div className='day'>{props.date}</div>
            </div>
            <div className='list-name'>{props.listName}</div>
            <div className='amount'>${props.amounts}</div>
        </div>
    )
}