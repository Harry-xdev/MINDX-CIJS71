import './taskbar.css'
export const TaskBar = (props) => {
    return (
        <div className='taskBar'>
            <div className="circle"></div>
            {props.task}
        </div>
    )
}