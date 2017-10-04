$(function(){
    //alert("Hi!");
    var LIST = $('.bl-list');
    var ITEM_TEMPLATE = $('.bl-row').html();

    function addItem(title) {
        var node = $(ITEM_TEMPLATE); //Create new HTML node
        //node.addClass("bl-row");
        node.css("border-bottom-style", "solid");
        node.find("bl-product").text(title); //Set product title
//Delete Action
        node.find(".bl-remove-item").click(function(){
            node.remove();
        });
        LIST.append(node); //Add to the end of the list
    }
    $(".bl-add").click(function(){
        //var name = document.getElementsByClassName(".bl-text-add-field")[whole_number].value;
        var name = document.getElementById('addingfield').value;
        addItem(name);
        //$(".bl-text-add-field").val("");
        $("#addingfield").val("");
    });
});