import React,{useState,useEffect, useRef} from 'react';
import axios  from  "axios";
// import Styles from './GetApi.css';
import { uploadFile,  } from 'react';


export default function GetAPI() {

   const [result, setResult] = useState([]);
   const [query,setQuery] = useState('reacthooks')
   const [selectedFile, setSelectedFile] = useState('') 
   const searchInputRef = useRef();
   const [loading,setLoading] = useState(false)
  
   useEffect(() =>{
       getResult();
   },[])

   const getResult = async () => {
       debugger
       setLoading(true);
    var response = await  axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
    
    setResult(response.data.hits)
    setLoading(false);
   }
   const handleSearch = (e) => {
        e.preventDefault();
        getResult();
   }
   const handleClear = (e) => {
       e.preventDefault();
       debugger
    setQuery("");
    searchInputRef.current.focus();
   }
   return (
       
       <div>
           <form onSubmit={handleSearch}>
           <input type="text" value={query} ref={searchInputRef} onChange={e => setQuery(e.target.value)}/>
         
           <button>Search</button>
           <button onClick={handleClear}>Clear</button>
           </form>
          
           
          {loading? (<div>Loadig.....</div>):( <ul>
           {result ?result.map(result =>(
           <li key={result.objectID}><a href={result.url}>{result.title}</a></li>)): null
           }
          </ul>)}
           
        
       </div>
   )
}
