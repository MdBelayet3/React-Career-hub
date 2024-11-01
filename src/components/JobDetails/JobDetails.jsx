import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobsApplication } from "../../utilities/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    console.log(jobs);
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);

    const { contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, salary } = job;
    const { phone, email, address } = contact_information;

    const handleApplyNow = () => {
        saveJobsApplication(intId);
        toast.success("You have applied this job");
    }
    return (
        <div>
            <h2 className="text-3xl font-black text-center my-20">Job details</h2>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="grid col-span-2 gap-6">
                    <h2><span className="font-black">Job Description : </span>{job_description}</h2>
                    <h2><span className="font-black">Job Responsibility : </span>{job_responsibility}</h2>
                    <div>
                        <h2 className="font-black mb-4">Educational Requirements :</h2>
                        <p>{educational_requirements}</p>
                    </div>
                    <div>
                        <h2 className="font-black mb-4">Experiences : </h2>
                        <p>{experiences}</p>
                    </div>
                </div>
                <div className="col-span-1 text-xl ">
                    <div className="bg-[#dad1fc] p-10 rounded-2xl">
                        <h2 className="font-black">Job Details</h2>
                        <hr className="my-6" />
                        <h2 className="mb-4"><span className="font-black">Salary : </span>{`${salary} (per month)`}</h2>
                        <h2><span className="font-black">Job Title : </span>{job_title}</h2>
                        <h1 className="mt-8 mb-6 font-black">Contact Information</h1>
                        <hr className="mb-6" />
                        <p><span className="font-black">Phone : </span>{phone}</p>
                        <p className="my-6"><span className="font-black">Email : </span>{email}</p>
                        <p><span className="font-black">Address : </span>{address}</p>
                    </div>
                    <button onClick={handleApplyNow} className="btn bg-[#7E90FE] text-white w-full mt-6 font-black text-2xl">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;