function validate() {
    var admin = $("#name").val();
    var adminpass = $("#password").val();

    if(admin == ""){
        $(".user-form ").html("Enter username");
        
    }else if(admin.length <5) {
        $(".user-form").html("Name must contain letters"); console.log(admin)
    }
}