import PropTypes from 'prop-types';

const FeaturedJob = ({job}) => {
    console.log(job)
    return (
        <div>
            
        </div>
    );
};

FeaturedJob.propTypes = {
    job : PropTypes.object.isRequired,
};

export default FeaturedJob;