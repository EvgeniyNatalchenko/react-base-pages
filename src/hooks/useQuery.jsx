import React, {useState, useEffect} from 'react'


function useQuery({url}) {
    const [requestData, setRequestData] = useState(null)
    console.log(url)
    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(json=>setRequestData(json))
        .catch(e => {
            console.error(e)
        })
    }, [url])

    return [requestData, (state) => console.log('callback', state)]
    
}

export default useQuery