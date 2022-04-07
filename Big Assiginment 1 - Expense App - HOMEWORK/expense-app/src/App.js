import {Button} from './components/Button'
import {ListBar} from './components/ListBar'
import './App.css'
import { PercentBar } from './components/PercentBar';
import {AddingForm} from './components/Form/form.js'

function App(props) {
  return (
    <div className='app' style={{}} onClick=''>

      <div className='header'>
        <Button customStyle={{color: '#fff', backgroundColor: 'rgb(92, 7, 92)'}}>ADD NEW EXPENSE</Button>
      </div>
      
      <AddingForm />

      <div className='main-body'>

        <div className='top-body'>Filter by year
        </div>

        <PercentBar />
        <ListBar
          amounts='50'
          listName='Some Books'
          month='January'
          year='2022'
          date='08'
        ></ListBar>

        <ListBar
          amounts='75'
          listName='Electricity Bill'
          month='December'
          year='2022'
          date='30'
        ></ListBar>

        <ListBar
          amounts='100'
          listName='New Bike'
          month='February'
          year='2022'
          date='01'
        ></ListBar>
        
        <ListBar
          amounts='60'
          listName='New Surface Pro 7'
          month='May'
          year='2022'
          date='01'
        ></ListBar>

        <ListBar
          amounts='100'
          listName='Mindx cost fee'
          month='June'
          year='2022'
          date='21'
        ></ListBar>

        <ListBar
          amounts='25'
          listName='Foods'
          month='September'
          year='2022'
          date='16'
        ></ListBar>

        <ListBar
          amounts='95'
          listName='Police'
          month='August'
          year='2022'
          date='13'
        ></ListBar>
        
      </div>
    </div>
  )
}

export default App;
