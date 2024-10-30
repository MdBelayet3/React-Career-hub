import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

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
            <div>
                {
                    jobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;