const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-application');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobsApplication = id =>{
    const savedJobApplication = getStoredJobApplication();
    const exists = savedJobApplication.find(jobId => jobId === id);
    if(!exists){
        savedJobApplication.push(id);
        localStorage.setItem('job-application',JSON.stringify(savedJobApplication));
    }
}

export {saveJobsApplication, getStoredJobApplication}