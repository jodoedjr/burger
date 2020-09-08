//Wait until DOM is loaded to attach handlers
$(function() {
    //update burger to devoured
    $(".change-devoured").on("click", function(event){
        const id = $(this).data("id");
        const newDevoured = $(this).data("newdevoured");

        const newDevouredState = {
            devoured: newDevoured
        };

        // Send AJAX PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                //console.log("changed devoured to ", newDevouredState);
                //reload page for updated list
                location.reload();
            }
        );
    });

    //add new burger
    $(".create-form").on("submit", function(event) {
        //prevent default on submit
        event.preventDefault();
        
        const newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        //send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Created new burger: " + newBurger.burger_name);
                location.reload();
            }
        );
    });

    //status of delete-burger
    //commented out in html
    //present in page js - burger.js
    //does not exist in database functions in orm/model/controller
    $(".delete-burger").on("click", function(event) {
        const id = $(this).data("id");

        //Send the DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE:"
        }).then(
            function() {
                //console.log("deleted burger: ", id);
                //reload for updated list
                location.reload();
            }
        );
    });

});