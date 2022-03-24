
$(document).ready(function () {
  $("#order-btn").click(function (event) {
    event.preventDefault();

    var pizzaSize = $(".size option:selected").val();
    var pizzaToppings = $(".toppings option:selected").val();
    var pizzaCrust = $(".crust option:selected").val();
    var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
    var order = 1;
    var grandTotal = 0;


    $("#add-btn").show();
    $("#order-btn").hide();

    $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
    $("#toppings").html($(".toppings option:selected").text() + " - " + pizzaToppings);
    $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
    $("#total").html(total);
   

    function Pizza(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }

    $('#add-btn').click(function (event) {
      
      event.preventDefault();
      var pizzaSize = $(".size option:selected").val();
      var pizzaToppings = $(".toppings option:selected").val();
      var pizzaCrust = $(".crust option:selected").val();
      var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
      order = order + 1;
      grandTotal = grandTotal + total;


      var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#pizza").append(newRow);
    });

    $("#checkout").click(function(event) {
      event.preventDefault();
      $("#add-btn").hide();
      // $(".btn.check-out").hide();
      grandTotal = grandTotal + total;
      

      alert("Your total amount is Ksh. " + grandTotal);

      if(total > 1){
        var answer = prompt("Would you like to have your pizza delivered for Ksh. 200?? If yes, enter yes.")
        if(answer == "yes"){
          var location = prompt("Enter your location");
          if(location != ""){
            alert("Your pizza will be delivered to" + location+ " total amount is "+ (grandTotal +200));
          }
          else{
            alert("Your total amount is Ksh. " + grandTotal);
          }
        }
        else{
          alert("Your total amount is Ksh. " + grandTotal);
        }
      }
    });
  })
})