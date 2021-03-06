import { useState } from "react";

import '../../Css/Decks/DeckCreatorStatistics.css'
import ColorsChart from '../Charts/ColorsChart';
import ManaCostsChart from '../Charts/ManaCostsCharts';
import TypesChart from "../Charts/TypesChart";

function DeckCreatorStatistics(props) {

    const [chartType, setChartType] = useState('colors')

    return (  
        <div className="mainDeckCreatorStatisticsDiv">
            <div className='deckCreatorStatisticsChart'>
                {chartType === 'colors' ? <ColorsChart colors={props.colors}/> : <></>}
                {chartType === 'mana' ? <ManaCostsChart cardCosts={props.cardCosts}/> : <></>}
                {chartType === 'type' ? <TypesChart types={props.types}/> : <></>}
                {chartType === 'lands' ? <ColorsChart colors={props.lands}/> : <></>}
            </div>
            <div className='deckCreatorStatisticsSelector'>
                <button className={chartType !== 'colors' ? "deckCreatorStatisticsButton" : "deckCreatorStatisticsButtonSelected"}  onClick={() => {setChartType('colors')}}>Card Color</button>
                <button className={chartType !== 'mana' ? "deckCreatorStatisticsButton" : "deckCreatorStatisticsButtonSelected"} onClick={() => {setChartType('mana')}}>Mana Cost</button>
                <button className={chartType !== 'type' ? "deckCreatorStatisticsButton" : "deckCreatorStatisticsButtonSelected"} onClick={() => {setChartType('type')}}>Type</button>
                <button className={chartType !== 'lands' ? "deckCreatorStatisticsButton" : "deckCreatorStatisticsButtonSelected"} onClick={() => {setChartType('lands')}}>Lands</button>
            </div>
        </div>
    );
}

export default DeckCreatorStatistics;