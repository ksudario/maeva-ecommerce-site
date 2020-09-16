import React,{useState,useEffect} from "react"

function UpdateQuote() {
    const [quote,setQuote] = useState('');
    const [loading,setLoading] = useState(true);
    const [author,setAuthor]= useState('');


    useEffect(()=>{
        getQuote();
       const intervalID = setInterval(()=>{
        getQuote()
       }, 12 * 30 * 30 * 500);
    return ()=>{
        clearInterval(intervalID);
    }
    },[])
    function getQuote() {
        fetch('http://quotes.rest/qod.json?category=inspire')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setQuote(data.contents.quotes[0].quote);
            setAuthor(data.contents.quotes[0].author);
        })
    }
return(
    <>
    <h1>{quote}</h1>
    <p>- {author}</p>
    </>
)
}
export default UpdateQuote