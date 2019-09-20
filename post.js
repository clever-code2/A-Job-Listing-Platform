//post request
$(document).ready(() => {
    $('#submit').click((event) => {
        event.preventDefault();
        const job_title =$('#job_title').val();
        const location =$('#location').val();
        const company =$('#company').val();
        const salary =$('#salary').val();
        const type_of_job =$('#type_of_job').val();
        const job_requirement =$('#job_requirement').val();
        const job_function =$('#job_function').val();
        const jobs = {job_title, location, company, salary, type_of_job, job_requirement, job_function};
        $.post("http://localhost:3000/jobs", jobs, alert('job posted successfuly')); //posting to data database
    })
        
})


