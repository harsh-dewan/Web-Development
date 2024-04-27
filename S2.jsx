import { useState } from "react";

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
]
const maxVotes = [0,0,0,0,0,0,0, 0];
let [index, randomAnecdote] = [];
let anecdote_="";
let maxCount = 0, maxOcc = 0;

function S2() {
    return(
        <>
            <AnecdoteDisplay />
        </>
    );
}

function AnecdoteDisplay() {

    [index, randomAnecdote] = useState(-1);
    const handleAnecdoteDisplay = () => {
        index = Math.floor(Math.random() * 8);
        console.log("index: "+index);
        randomAnecdote(index);
        anecdote_ = anecdotes[index];
    }
    return (
        <>
        <div>
            <p>{anecdote_}</p>
            <MaxVote />
            <button onClick={handleAnecdoteDisplay}>Next Quote</button>
            <DisplayMostVotedQuote />
        </div>
        </>
    );
}

function MaxVote() {

    const handleVoteForQuote = () => {
        maxVotes[index] += 1;
        console.log(maxVotes);
    }
    return (
        <>
        <button onClick={handleVoteForQuote}>Vote</button>
        </>
    );
}

function DisplayMostVotedQuote() {
    if( index == -1) {
        return(
            <>
            <p>No Quote Voted!! Please Vote</p>
            </>
        );
    }
    else {
        for( let i = 0; i < 8; i++ ) {
            if( maxVotes[i] > maxCount) {
                maxCount  = maxVotes[i];
                maxOcc = i;
            }
        }
        return (
            <>
            <p>{anecdotes[maxOcc]}</p>
            </>
        );
    }
}

export default S2;