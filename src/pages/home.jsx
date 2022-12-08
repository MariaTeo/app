import * as React from "react";
import "./homeStyles.css";

export default function Home() {
	const [myData, setMyData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://randomuser.me/api?results=100&nat=us,dk,fr,gb,br");
      const data = await res.json();
		  return setMyData(data);
	  };
    
    getData()
  },[])
  
	
  
  const { results, info } = myData
  console.log(results, "dATA?")
  
  return (
    <>
       <div>
        <p>Filter users by name:</p>
        <input type="text" />
      </div>
  
     
    </>
  );
}
