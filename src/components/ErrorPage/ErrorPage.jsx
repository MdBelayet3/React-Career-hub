import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className=" text-base text-center">
            <h2 className="text-2xl">Oops!!!</h2>
            <p>Sorry, An unexpected error Occurred.</p>
            <p>
                {error.statusText || error.message}
            </p>
            {
                error.status === 404 && <div>
                    <p>Not found</p>
                    <p>Go back where you from</p>
                    <Link  to="/"><button className="bg-blue-600 text-white px-4 py-2 mt-4
                     rounded-md text-lg">GO Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;