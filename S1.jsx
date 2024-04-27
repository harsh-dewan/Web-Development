import { useState } from "react";

let [rating, updateRating]=[];


const updateGoodCount = () => {
    //console.log("func called for good review");
    updateRating({
        ...rating, good : rating.good+1, total:rating.total + 1
    });
}

const updateNeutralCount = () => {
    //console.log("func called for neutral review");
    updateRating({
        ...rating, neutral : rating.neutral+1,  total:rating.total + 1
    });

}

const updateBadCount = () => {
    //console.log("func called for bad review");
    updateRating({
        ...rating, bad : rating.bad+1,  total:rating.total + 1
    });

}


function S1() {


    [rating, updateRating] = useState({
        good:0,
        neutral:0,
        bad:0,
        total: 0
    });

    return (
        <div>
            <ButtonComponent />
            <Statistics rating={rating}/>
        </div>
    );  
}

function ButtonComponent() {
    return (
        <>
        <h1>Give Feedback</h1>
        <button onClick={updateGoodCount}>Good</button>
        <button onClick={updateNeutralCount}>Neutral</button>
        <button onClick={updateBadCount}>Bad</button>
        </>
    );
}

function Statistics({rating}) {
    if( rating.total ==  0 ) {
        return (
            <>
            <p>No Feedback Given</p>
            </>
        );
    }
    else return (
        <>
            <h1>Statistics</h1>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <Good good_count={rating.good} />
                    <Neutral neutral_count={rating.neutral}/>
                    <Bad bad_count={rating.bad}/>
                    <TotalRating total_count={rating.total}/>
                    <AverageRating props={rating}/>
                    <PositiveRating rating={rating}/>
                </tbody>
            </table>
        </>
    );
}

function PositiveRating(props) {
    let goodCountPercentage = 0;
    if( props.rating.total  > 0 ) {
        goodCountPercentage = props.rating.good/props.rating.total;
    }
    return (
        <>
        <tr>
            <td>Positive Percentage</td>
            <td>{goodCountPercentage}</td>
        </tr>
        </>
    );
}

function AverageRating({props}) {
    let totalScore = 0, averageRating = 0;
    if( props.total > 0 ) {
        totalScore = props.good*1 + props.neutral*0 + props.bad*(-1);
        averageRating = totalScore/props.total;
    }
    return (
        <>
        <tr>
            <td>Average Rating</td>
            <td>{averageRating}</td>
        </tr>
        </>
    );
}

function TotalRating(props) {
    return (
        <>
        <tr>
            <td>Total Rating</td>
            <td>{props.total_count}</td>
        </tr>
        </>
    );
}

function Good(props) {
    return (
        <>
        <tr>
            <td>Good Rating Count</td>
            <td>{props.good_count}</td>
        </tr>
        </>
    );
}

function Bad(props) {

    return (
        <>
        <tr>
            <td>Bad Rating Count</td>
            <td>{props.bad_count}</td>
        </tr>
        </>
    );

}

function Neutral(props) {
    //console.log("neutralprop: "+props.neutral_count);
    return (
        <>
        <tr>
            <td>Neutral Rating Count</td>
            <td>{props.neutral_count}</td>
        </tr>
        </>
    );

}

export default S1