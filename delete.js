//delete request
$('#delete').click((event) => {
    event.preventDefault();
    const jobId = $('#deletejob').val(); 
    console.log(jobId);
    $.ajax({
        url: `http://localhost:3000/jobs/${jobId}`,
        type: 'DELETE',
        dataType: 'json',
        success: () => {alert(`job with id number${jobId} has been deleted`)},
        error: (error) => console.log(error),
    })
})










/*$("#delete").click(function(e) {
    e.preventDefault()
    const id = $("#deletejob").val();
    console.log(id)
    userId = 
    $.ajax({
        url:`http://localhost:3000/jobs/?id=${id}`,
        
        method: "Delete",
        success: function(res) {
            alert("Deleted");
        }
    })
})*/