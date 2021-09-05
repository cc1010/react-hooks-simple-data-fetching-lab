// create your App component here
import React, { useState, useEffect } from "react";

function App() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState("");
	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => res.json())
			.then((info) => {
				setData(info);
				setLoading(true);
			});
	}, []);
	console.log(data);

	return (
		<>
			<p>{loading ? null : "Loading..."}</p>
			<img alt={loading ? null : "A Random Dog"} src={data.message}></img>
			{loading ? (
				<img alt="A Random Dog" src={data.message}></img>
			) : (
				<img alt="A Random Dog" src=""></img>
			)}
		</>
	);
}
export default App;
