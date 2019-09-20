$(document).ready(function(){
    $("#submit").click(function(){
      $.post("http://localhost:3000/jobs",
      {
    job_title =$('#job_title').val();
    location =$('#location').val();
    company =$('#company').val();
    salary =$('#salary').val();
    type_of_job=$('#type_of_job').val();
    job_requirment =$('#job_requirement').val();
    job_function =$('#job_function').val();
      },
      function(data,status){
        alert("Data: " + data + "\nStatus: " + status);
      });
    });
  });






  "jobs": [
    { "id": 1, "job_title": "accountant", 
      "location": "Abuja", 
      "company": "Typecode",
      "salary": "Typecode", 
      "type_of_job": "Typecode",
      "job_requirement": "Typecode", 
      "job_function": "Typecode"}
  ],









  $(document).ready(function(){
    $.get("http://localhost:3000/jobs",function(data){
        for(var i = 0; i<data.length; i++){
           var list = '<tr><td>'+data[i].job_title+'</td>';
           list += '<td>'+data[i].location+'</td>';
           list += '<td>'+data[i].company+'</td>';
           list += '<td>'+data[i].salary+'</td>';
           list += '<td>'+data[i].type_of_job+'</td>';
           list += '<td>'+data[i].job_requirement+'</td>';
           list += '<td>'+data[i].job_function+'</td></tr>';

           $('table tbody').append(list)
        }
    })

    $('#submit').submit(function(e){
        e.preventDefault();
    var job_title =$('#job_title').val();
    var location =$('#location').val();
    var company =$('#company').val();
    var salary =$('#salary').val();
    var type_of_job =$('#type_of_job').val();
    var job_requirement =$('#job_requirement').val();
    var job_function =$('#job_function').val();
    var url =$(this).attr('action');
    $.post(url,
        {jobs:job_title, location, company, salary, type_of_job, job_requirement, job_function}).done(
            function(data){
                console.log('post saved')
                $('table tbody').append(data);
      })

    })

})  


$("#submit").click(function(event){
  $.get( "http://localhost:3000/jobs",function(jobs){
      //console.log(data[1].name);
      for (let i = 0; index < jobs.length; i++) {
       $('#getjob').append(`<li id=${i+1}>${jobs[i]['name']}<a href="http://localhost:3000/jobs/${i+1}">select</a><span id=${i+1} onclick="del();">delete</span></li>`);
        console.log(data[index]);
      
          };  

  });
});

/*$.get("http://localhost:3000/jobs",function(jobs){
            for(var i = 0; i<jobs.length; i++){
                var list = '<tr><td>'+jobs[i].job_title+'</td>';
                list += '<td>'+jobs[i].location+'</td>';
                list += '<td>'+jobs[i].company+'</td>';
                list += '<td>'+jobs[i].salary+'</td>';
                list += '<td>'+jobs[i].type_of_job+'</td>';
                list += '<td>'+jobs[i].job_requirement+'</td>';
                list += '<td>'+jobs[i].job_function+'</td></tr>';
            
                $('table tbody').append(list);
            }
        })





        /*function deletejobs(id){
    $.ajax({
        url: 'http://localhost:3000/jobs/' +id,
        method: 'DELETE',
        success: function () {
            alert('record has been deleted');
            jobs();
        },
        error: function(error) {
            alert(error);
        }
    })
}
$(document).ready(() => {
    $('#submit').click((event) => {
    $.get("http://localhost:3000/jobs",function(jobs){
            for(var i = 0; i<jobs.length; i++){
                if((jobs[i].id) == number){
                    console.log(job[i].id);
                    $.ajax({
                        url:`http://localhost:3000/jobs/${number}`,
                        type:'DELETE',
                        dataType:'json'
                    })
                }
            
            }
        })
   })
})






$('#jobId').click((event) => {
    event.preventDefault();
    const jobId = $('#jobId').val(); 
    console.log(jobId);
    $.ajax({
        url: `http://localhost:3000/jobs/${jobId};`,
        type: 'DELETE',
        dataType: 'json',
        success: () => {alert(`job with id number${jobId} has been deleted`)},
        error: (error) => console.log(error),
    })
})


$( "#jobId" ).submit(function( event ) {
 
    // Stop form from submitting normally
    event.preventDefault();
   
    // Get some values from elements on the page:
        var number = $('#deletejob').val();
        $.get( "http://localhost:3000/jobs",function(data){
           
                      
                     for (let i = 0; i <= data.length; i++) {
                             //console.log(data[index].id);
          
                                if((data[i].id) == number ){
                                   console.log(data[i].id);

                                   $.ajax({

                                        url:`http://localhost:3000/jobs/${number}`,
                                        type:'DELETE',
                                        dataType:'json'

                                   });
                                 }  
                           
                    }
            
        });  
    });





    $('#deletejob').click((event) => {
    event.preventDefault();
    const jobId = $('#jobId').val(); 
    console.log(jobId);
    $.ajax({
        url: `http://localhost:3000/jobs/${jobId};`,
        type: 'DELETE',
        dataType: 'json',
        success: () => {alert(`job with id number${jobId} has been deleted`)},
        error: (error) => console.log(error),
    })
})