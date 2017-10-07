$(function(){
    //alert("Hi!");
    var $list = $(".bl-list");
    //var $add_prod = $(".bl-add-product");
    var ONE_ITEM_HTML = $(".one-row-template").html();

    function addItem(title) {
        var $node = $(ONE_ITEM_HTML); //Create new HTML node
        //$node.addClass("bl-row");
        //$node.css("border-bottom-style", "solid");
        $node.find(".bl-product").text(title); //Set product title
//Delete Action
        $node.find(".bl-remove-item").click(function(){
            $node.remove();
        });
        $list.append($node); //Add to the end of the list
        //$add_prod.append($node);
    }
    $(".bl-add").click(function(){
        //var name = document.getElementsByClassName(".bl-text-add-field")[whole_number].value;
        //var name = document.getElementById('addingfield').val();
        var name = $("#addingfield").val();
        addItem(name);
        //$(".bl-text-add-field").val("");
        $("#addingfield").val("");
    });
});