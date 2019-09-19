$('#view-job').click((event) => {
    event.preventDefault();
    const jobId = $('#jobId').val(); 
    console.log('userId', jobId)
    $.get(`http://localhost:3000/jobss/?id=${userId}`, jobs => {
        $('#list-a-jobs').append(`<li> ${jobs[0].jobs}</li>`);

    }, alert('getting a job post'))
})