import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localStorage";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";
import { FaChevronDown } from "react-icons/fa";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [jobsApplied, setJobsApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    // console.log(jobsApplied)

    useEffect(() => {
        const storedJobApplicationId = getStoredJobApplication();
        if (jobs.length > 0) {

            const appliedJobs = jobs.filter(job => storedJobApplicationId.includes(job.id));

            // const appliedJobs = [];
            // for (const id of storedJobApplicationId) {
            //     const job = jobs.find(job => job.id === id);
            //     if (job) {
            //         appliedJobs.push(job)
            //     }
            // }
            setJobsApplied(appliedJobs);
            setDisplayJobs(appliedJobs);
            // console.log(jobs, storedJobApplicationId, appliedJobs);
        }
    }, [jobs])

    const handleFilterBtn = filter =>{
        if(filter === 'all'){
            setDisplayJobs(jobsApplied)
        }
        else if(filter === 'remote'){
            const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    return (
        <div>
            <h2 className="mt-10 mb-20 text-2xl font-black text-center">Applied Jobs</h2>
            <details className="dropdown mb-10 ">
                <summary className="btn m-1 font-semibold text-xl">Filter By <FaChevronDown /></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleFilterBtn('all')}><a>All</a></li>
                    <li onClick={() => handleFilterBtn('remote')}><a>Remote</a></li>
                    <li onClick={() => handleFilterBtn('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <div>
                {
                    displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;