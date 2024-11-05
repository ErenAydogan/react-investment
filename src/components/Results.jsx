import { calculateInvestmentResults } from '../util/investment';


const Results = ( props ) =>
{
    const resultsData = calculateInvestmentResults(props.input);

    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Invest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </>
    )
}

export default Results;