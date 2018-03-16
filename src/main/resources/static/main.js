

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
        var checkDate = /^((19|20)\d{2})\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/
            .test(date);
        if(!checkDate){
            $('.err').text("Please enter date in mm/dd/yyyy format");
            return false;
        }
        if(input_date<now) {
            $('.err').text("Cannot pick past date!");
            return false;
        }

        else if(input_date.toString()==now.toString() && time<current_time){
            $('.err').text("Cannot set past time!");
            return false;
        }

        $(".container.appointment-area").append('<div class="row"><div class="col-sm-4">'+date+'</div><div class="col-sm-4">'
            +time+'</div><div class="col-sm-4">'+desc+'</div></div>');
    });
});





