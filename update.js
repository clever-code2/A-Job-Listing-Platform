$('#update-jobs').click((event) => {
    event.preventDefault();
    const job_title =$('#job_title').val(); console.log(job_title)
    const location =$('#location').val(); console.log(location)
    const company =$('#company').val();
    const salary =$('#salary').val();
    const type_of_job =$('#type_of_job').val();
    const job_requirement =$('#job_requirement').val();
    const job_function =$('#job_function').val();
    const jobs = {job_title, location, company, salary, type_of_job, job_requirement, job_function};
        $.ajax({
            url: `http://localhost:3000/jobs/${jobid}`,
            type: 'PATCH',
            data: jobs,
            dataType: 'json',
            success: () => {alert(`Record with Id number ${jobid} has been updated`)},
            error: (error) => console.log(error),
        })
});

/*$(document).ready(() => {
    const ID = $("#jobid").val()
    const jobId = jobs[0].id
    $.get(`http://localhost:3000/jobs/id=${jobId}`,function(jobs){
        
        console.log(jobId)
        const job_title = jobs[0].job_title; console.log(job_title)
        const location = jobs[0].location;
        const company = jobs[0].company;
        const salary = jobs[0].salary;
        const type_of_job = jobs[0].type_of_job;
        const job_requirement = jobs[0].job_requirement;
        const job_function = jobs[0].job_function;
        const job ={jobId, job_title, location, company, salary, type_of_job, job_requirement, job_function};
    
    $.ajax({
        url: `http://localhost:3000/jobs/${jobd}`,
        type: 'PUT',
        data: job,
        dataType: 'json',
        success: () => {alert(`Record with Id number ${jobid} has been updated`)},
        error: (error) => console.log(error),
    })
})
})*/