import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategories/JobCategories";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career hub | home</title>
            </Helmet>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;