$.get("http://localhost:3000/jobs", function(jobs) {
        console.log(jobs);
        for (let i = 0; i < jobs.length; i++) {
            $('#body').append(`
            <tr>
            <td>${jobs[i].id}</td>
            <td>${jobs[i].job_title}</td>
            <td>${jobs[i].location}</td>
            <td>${jobs[i].salary}</td>
            <td>${jobs[i].company}</td>
            <td>${jobs[i].type-of_job}</td>
            <td>${jobs[i].job_requirement}</td>
            <td>${jobs[i].job_function}</td>
            <td>
                <a class= "button btn btn-primary btn-sm" id="update">update</a>
                <button class="button btn btn-danger del" value="${update[i].id}" style="background: red;">Delete</button>
            </tr>
            `);
        }

        $("#deletejob").click(function(e) {
            e.preventDefault()
            const id = $(this).val();
            $.ajax({
                url:`http://localhost:3000/jobs/${id}`,
                method: "Delete",
                success: function(res) {
                    alert("Deleted");
                }
            })
        })
    })