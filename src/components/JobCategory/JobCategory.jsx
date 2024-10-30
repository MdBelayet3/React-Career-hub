import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobCategory = ({ job }) => {
    const { logo, category_name, availability } = job;
    return (
        <Link>
            <div className='p-8 lg:p-10 bg-[#b8b8be0d] shadow-md rounded-2xl'>
                <img className='h-10 w-10 lg:h-20 lg:w-20 mb-4 lg:mb-8' src={logo} alt={`logo of ${category_name}`} />
                <h2 className='text-xl font-extrabold'>{category_name}</h2>
                <p>{availability}</p>
            </div>
        </Link>
    );
};

JobCategory.propTypes = {
    job: PropTypes.object.isRequired,
};

export default JobCategory;