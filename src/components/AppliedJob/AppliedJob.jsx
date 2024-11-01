import PropTypes from 'prop-types';
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const { id, company_name, job_title, job_type, location, logo, remote_or_onsite, salary } = job;
    return (
        <div className=' flex flex-col md:flex-row justify-between items-center gap-9 shadow-2xl p-8 rounded-2xl'>
            <div className='flex flex-col md:flex-row items-center gap-9'>
                <div className='bg-[#F4F4F4] rounded-lg shadow-md md:py-[95px] md:px-[47px] p-8'><img src={logo} alt="" /></div>
                <div>
                    <h2 className='text-2xl font-black mb-3'>{job_title}</h2>
                    <h4 className='text-2xl font-semibold text-[#757575]'>{company_name}</h4>
                    <div className='mt-4 mb-6 flex gap-4 font-extrabold'>
                        <p className='border-2 text-[#9873FF] py-2 px-4 rounded-lg border-[#9873FF]'>{remote_or_onsite}</p>
                        <p className='border-2 text-[#9873FF] py-2 px-4 rounded-lg border-[#9873FF]'>{job_type}</p>
                    </div>
                    <div className='flex gap-6'>
                        <p className='flex gap-2 items-center'><span><CiLocationOn /></span>{location}</p>
                        <p className='flex gap-2 items-center'><span><CiDollar /></span>{salary}</p>
                    </div>
                </div>
            </div >
            <div>
                <Link to={`/job/${id}`}>
                    <button className='btn bg-[#9873FF] text-xl font-extrabold p-3 text-white mt-4'>View Details</button>
                </Link>
            </div>

        </div>
    );
};

AppliedJob.propTypes = {
    job: PropTypes.object.isRequired,
};

export default AppliedJob;