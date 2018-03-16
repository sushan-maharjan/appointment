

$(document).ready(function(){

   var getAppointments = $("#btnSearch").click(function() {
        const searchString=$("#txtSearch").val();
        $.ajax({
            url: "/appointment",
            method: "get",
            data: {'str': searchString},

            success: function (data) {
                var appointments = "";
                $.each(data, function (key, value) {

                    appointments += "<tr >" +
                        "<td  >" + value.date + "</td>" +
                        "<td  >" + value.time + "</td>" +
                        "<td  >" + value.description + "</td>" +
                        "</tr>";
                });
                $("#appointmentTable").html(appointments);
                $("#appointmentTable").closest("#hidden").show();
            },
            /* error: function( textStatus) {
             console.log("Status: " + textStatus);

             }*/
        });
    });

   $('#date').datepicker({
       minDate: new Date()
   });

    $("#new-btn").click(function(){
        $("#new-btn").hide();
        $(".add-form").show();
    });

    $("#cncl-btn").click(function(){
        $("#new-btn").show();
        $(".add-form").hide();
    });

    $("#btn-add").click(function(){
        var date = $("#date").val();
        var time = $("#time").val();
        var desc = $("#desc").val();

        var input_date = new Date(date);
        input_date.setHours(0,0,0,0);
        var now = new Date();
        now.setHours(0,0,0,0);
        var current_time = new Date().toString().substr(16,5);

        if(input_date<now) {
            $('.err').text("Cannot pick past date!");
            return false;
        }

        else if(input_date.toString()==now.toString() && time<current_time){
            $('.err').text("Cannot set past time!");
            return false;
        }
    });
});





