import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = function () {
	const [count, setCount] = useState(0);


	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:5000/acquire")
	// 		.then((users) => {
	// 			setUsers(users)
	// 			console.log(users)
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	// setUsers({
	// 	name: 'This is the moment i am wating for.'
	// })

	// useEffect(()=>{
		
	// })
	    
	return (
		<>
	<p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

		</>
	);

}
export default App