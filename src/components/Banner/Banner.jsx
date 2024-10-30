import belayet from '../../assets/images/belayet.jpg'
const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[70px]'>
            <div className=''>
                <h1 className='text-3xl lg:text-7xl font-extrabold'>One Step Closer To Your <span className='text-[#9873FF]'>Dream Job</span></h1>
                <p className='my-3 lg:my-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn text-white bg-[#9873FF]'>Get Started</button>
            </div>
                <img className='h-80 lg:h-[500px]' src={belayet} alt="" />
        </div>
    );
};

export default Banner;