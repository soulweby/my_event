import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Home() {

    const [event, setEvent] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            let result = await axios.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&refine.city=Paris&refine.city_district=Paris+4e+Arrondissement")
            console.log(result.data.records)
            let finalResult = result.data.records

            setEvent(finalResult)
        }
    fetchData()
       
    }, []);
 
  return (
    <div>Home</div>
  )
}
