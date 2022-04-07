import './percentbar.css'
import { PercentPipe1 } from './Monthly'
import { PercentPipe2 } from './Monthly'
import { PercentPipe3 } from './Monthly'
import { PercentPipe4 } from './Monthly'
import { PercentPipe5 } from './Monthly'
import { PercentPipe6 } from './Monthly'
import { PercentPipe7 } from './Monthly'
import { PercentPipe8 } from './Monthly'
import { PercentPipe9 } from './Monthly'
import { PercentPipe10 } from './Monthly'
import { PercentPipe11 } from './Monthly'
import { PercentPipe12 } from './Monthly'


export const PercentBar = () => {
    return (
        <div className='monthly-container'>
            <div className='pipe-container'>
                <PercentPipe1 />
                <PercentPipe2 />
                <PercentPipe3 />
                <PercentPipe4 />
                <PercentPipe5 />
                <PercentPipe6 />
                <PercentPipe7 />
                <PercentPipe8 />
                <PercentPipe9 />
                <PercentPipe10 />
                <PercentPipe11 />
                <PercentPipe12 />
            </div>
            <div className='month-container'>
                <h4>Jan</h4>
                <h4>Feb</h4>
                <h4>Mar</h4>
                <h4>Apr</h4>
                <h4>May</h4>
                <h4>Jun</h4>
                <h4>Jul</h4>
                <h4>Aug</h4>
                <h4>Sep</h4>
                <h4>Oct</h4>
                <h4>Nov</h4>
                <h4>Dec</h4>
            </div>
        </div>

    )
}