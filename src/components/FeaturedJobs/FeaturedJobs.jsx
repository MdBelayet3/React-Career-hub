import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const[dataLength,setDataLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
                <p className="mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 ">
                {
                    jobs.slice(0,dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div onClick={() =>{setDataLength(jobs.length)}} className={`text-center mt-10 ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button className="btn btn-primary text-xl font-extrabold text-center">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;