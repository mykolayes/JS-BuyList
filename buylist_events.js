$(function(){
    //alert("Hi!");
    var $list = $(".bl-list");
    var $not_bought = $(".bl-not-bought-goods");
    var $bought = $(".bl-bought-goods");
    var ONE_ITEM_HTML = $(".one-row-template").html();
    var ONE_GOOD_HTML = $(".bl-goods-template").html();

    var disable_editing_product = false;

    function addItem(title) {
        var $node = $(ONE_ITEM_HTML); //Create new HTML node
        var $goods_node = $(ONE_GOOD_HTML);
        var $goods_bought_node = $(ONE_GOOD_HTML);

        var $good_not_bought_name = $goods_node.find(".bl-good-name");
        var $good_bought_name = $goods_bought_node.find(".bl-good-name");
        var $good_amount = $goods_node.find(".bl-amount");
        var $good_bought_amount = $goods_bought_node.find(".bl-amount");

        //Item on the list + buttons
        $node.find(".bl-product").text(title); //Set product title

        $node.find(".bl-product").click(function() {
            if (!disable_editing_product) {
                var prod_name = $node.find(".bl-product").text();
                $node.find(".bl-product").css("display", "none");
                $node.find(".bl-edit-good").show();
                $node.find(".bl-edit-good").val(prod_name);
                $node.find(".bl-edit-good").focus();
            }
        });

        $node.find(".bl-edit-good").blur(function() {
            if (true || e.keyCode == '13') {
                var prod_name = $node.find(".bl-edit-good").val();
                $node.find(".bl-edit-good").css("display", "none");
                $node.find(".bl-product").text(prod_name);
                $node.find(".bl-product").show();
                $good_not_bought_name.text(prod_name);
                $good_bought_name.text(prod_name);
            }
        });

        $node.find(".bl-remove-item").click(function(){
            $node.remove();
            $goods_node.remove();
        }); //Delete Action

        var quantity = 1;
        var $quantity_label = $node.find(".bl-label");
        $quantity_label.text(quantity);

        $node.find(".bl-plus").click(function() {
            quantity +=1;
            $quantity_label.text(quantity);
            $good_amount.text(quantity);
            $good_bought_amount.text(quantity);
        });

        $node.find(".bl-minus").click(function() {
            if (quantity > 1) {
                quantity -= 1;
                $quantity_label.text(quantity);
                $good_amount.text(quantity);
                $good_bought_amount.text(quantity);
            }
        });

        $node.find(".bl-bought-item").click(function(){
            $goods_node.hide();
            $node.find(".bl-unbuy-item").show();
            $goods_bought_node.show();
           disable_editing_product = true;

            $node.find(".bl-bought-item").hide();
            $node.find(".bl-remove-item").hide();
            $node.find(".bl-plus").hide();
            $node.find(".bl-minus").hide();
            $node.find(".bl-product").toggleClass("crossed_out");
            $good_bought_name.toggleClass("crossed_out");
            $good_bought_amount.toggleClass("crossed_out");
        });

        $node.find(".bl-unbuy-item").click(function(){
            $goods_node.show();
            $node.find(".bl-unbuy-item").hide();
            $goods_bought_node.hide();
            disable_editing_product = false;

            $node.find(".bl-bought-item").show();
            $node.find(".bl-remove-item").show();
            $node.find(".bl-plus").show();
            $node.find(".bl-minus").show();
            $node.find(".bl-product").toggleClass("crossed_out");
            $good_bought_name.toggleClass("crossed_out");
            $good_bought_amount.toggleClass("crossed_out");
        });

        //Good in the basket - $goods_node
        $good_not_bought_name.text(title);
        $good_bought_name.text(title);
        $good_amount.text(quantity);
        $good_bought_amount.text(quantity);



        $not_bought.append($goods_node);
        $bought.append($goods_bought_node);
        $goods_bought_node.hide();
        $list.append($node); //Add to the end of the list
    }
    $(".bl-add").click(function(){
        //var name = document.getElementsByClassName(".bl-text-add-field")[whole_number].value;
        //var name = document.getElementById('addingfield').val();
        var name = $("#addingfield").val();
        if  (name != "") {
            addItem(name);
            $("#addingfield").val("");
        }
    });
});