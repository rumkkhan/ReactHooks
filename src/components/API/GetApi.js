import React,{useState,useEffect} from 'react';
import axios  from  "axios";
import Styles from './GetApi.css';
import S3FileUpload from 'react-s3';
import AWS from  'aws-sdk'

// const config = {
//     bucketName: 'saralclouldexcelupload',
//     region: 'ap-south-1',
//     accessKeyId: 'AKIAYPWLFEAY7QTJCOW3',
//     secretAccessKey: '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',
//     metaTags: 'idsdfasdfasdfa'
// }
export default function GetAPI() {

   const [result, setResult] = useState([]);
   const [query,setQuery] = useState('reacthooks')
   const [filess, setFile] = useState(''); 
   const [selectedFile, setSelectedFile] = useState('') 
   const [bucket, setBucket] = useState(null);
  
   useEffect(() =>{
    //getResult()
   
   },[])


   const getResult = async () => {
    var response = await  axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
    setResult(response.data.hits)
   }

//   const fileSelectedHandler = event => {
// debugger
// AWS.config.region = 'ap-south-1'; // Region
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'ap-south-1:2f16e677-ee43-476e-a3c7-376b96c51260',
// });
// AWS.config.credentials.get(function(err) {
//   if (err) alert(err);
//   console.log(AWS.config.credentials);
// });
// var bucketName = 'your-bucket'; // Enter your bucket name
// var buckett = new AWS.S3({
//     params: {
//         Bucket: 'exceluploadd',
// Metadata: {
//       'x-amz-meta-my-key': 'some-value',
//       'x-amz-meta-my-clientId': 'relyonsoftteect',
//     },
//     },
// });
// setBucket(
//   buckett
  
// )
//     var fil = event.target.files[0];
   
   
//      setFile(fil);
//      console.log(filess)
// }
//   const fileUploadHandler = event => {
//     console.log(filess,"++++++++")
   
//     var objKey = filess.name;
//     var params = {
//         Key: objKey,
//         ContentType: filess.type,
//         Body: filess,
//         ACL: 'public-read'
//     };

//     bucket.putObject(params, function(err, data) {
//         if (err) {
           
//         } else {
           
//         }
//     });
//   }
   return (
       
       <div>
           <form>
           <input type="text" onChange={e => setQuery(e.target.value)}/>
           <ul>
           {result ?result.map(result =>(
           <li key={result.objectID}><a href={result.url}>{result.title}</a></li>)): null
           }
           </ul>
           <input type="file" id="myFile"onChange={fileSelectedHandler} />
            <p>Drag your files here or click in this area.</p>
            <button type="button" onClick={fileUploadHandler}>Try it</button>
           </form>
        
       </div>
   )
}
