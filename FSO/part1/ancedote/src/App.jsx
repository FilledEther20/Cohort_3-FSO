import { useState } from 'react'
const MostVotes=({votes,arr})=>{
  let maxi=0;
  for(let i=0;i<votes.length;i++){
    if(votes[i]>votes[maxi]){
      maxi=i;
    }
  }
  return(
    <>
      <h1>Most Votes </h1>
      <p>{arr[maxi]}</p>
    </> 
  )
}
const App = () => {
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
  
  const [selected, setSelected] = useState(0)
  const[votes,setVotes]=useState([...Array(anecdotes.length)].fill(0))
  
  const handleClick=()=>{
    const next_id=Math.floor(Math.random()*10)%anecdotes.length;
    setSelected(next_id)
  }
  const handleVoteClick=()=>{
    const upd_votes=[...votes]
    upd_votes[selected]+=1
    setVotes(upd_votes)
  }
  // console.log(votes)
  return (
    <>
      <h1>Ancedote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={handleClick}>
        next 
      </button>
      <button onClick={handleVoteClick}>
        vote for above ancedote
      </button>
      <MostVotes votes={votes} arr={anecdotes}/>
    </>
  )
}

export default App