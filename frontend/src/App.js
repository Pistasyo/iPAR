import { LineGraph } from './components/Line';
import './App.css';
import React from 'react'; 
import { BarChart } from './components/Bar';
import { PieChart } from './components/Pie';
import Sidebar from './components/Sidebar';

function App() {
  return (
      <div>
         <main>
          <div className="App">
            <div><Sidebar/></div>
            
            <div className='dataCard revenueCard'>
              <LineGraph/>
            </div> 
            <div className='dataCard revenueCard'>
              <BarChart/>
            </div> 
            <div className='dataCard revenueCard'>
              <PieChart/>
            </div> 
          </div>
         </main>
      </div>
  );
}

export default App;
