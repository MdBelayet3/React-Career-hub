import PropTypes from 'prop-types';
import { CiLocationOn, CiDollar } from "react-icons/ci";

const FeaturedJob = ({ job }) => {
    console.log(job)
    const { company_name, job_title, job_type, location, logo, remote_or_onsite, salary } = job;
    return (
        <div className='shadow-2xl p-10 rounded-2xl'>
            <img src={logo} alt={`Logo of ${company_name}`} />
            <div className='flex flex-col gap-4'>
                <h3 className='text-2xl font-extrabold mt-4'>{job_title}</h3>
                <p>{company_name}</p>
                <div className='flex gap-4 font-extrabold'>
                    <p className='border-2 text-[#9873FF] py-2 px-4 rounded-lg border-[#9873FF]'>{remote_or_onsite}</p>
                    <p className='border-2 text-[#9873FF] py-2 px-4 rounded-lg border-[#9873FF]'>{job_type}</p>
                </div>
                <div className='flex gap-6'>
                    <p className='flex gap-2 items-center'><span><CiLocationOn /></span>{location}</p>
                    <p className='flex gap-2 items-center'><span><CiDollar /></span>{salary}</p>
                </div>
            </div>
            <button className='btn bg-[#9873FF] text-xl font-extrabold p-3 text-white mt-4'>View Details</button>
        </div>
    );
};

FeaturedJob.propTypes = {
    job: PropTypes.object.isRequired,
};

export default FeaturedJob;