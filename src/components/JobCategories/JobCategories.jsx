import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const JobCategories = () => {

    const [jobs, setJob] = useState([])

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setJob(data))
    },[])

    return (
        <div className="my-16 lg:my-32">
            <div className="text-center font-extrabold">
                <h2 className="text-3xl lg:text-5xl mb-4">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-3 lg:mt-8">
                {
                    jobs.map(job => <JobCategory key={job.id} job={job}></JobCategory>)
                }
            </div>
            
        </div>
    );
};

export default JobCategories;