//get post
$(document).ready(() => {
    $.get("http://localhost:3000/jobs",function(jobs){
            for(var i = 0; i<jobs.length; i++){
                var list = '<td>'+jobs[i].job_title+'</td>';
                list += '<td>'+jobs[i].location+'</td>';
                list += '<td>'+jobs[i].company+'</td>';
                list += '<td>'+jobs[i].salary+'</td>';
                list += '<td>'+jobs[i].type_of_job+'</td>';
                list += '<td>'+jobs[i].job_requirement+'</td>';
                list += '<td>'+jobs[i].job_function+'</td></tr>'
            
                $('table tbody').append(list);
            }
        })
       
});



