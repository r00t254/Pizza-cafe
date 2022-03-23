{$(Document).ready(function);
var size =$("#size option:select").val();
var crust =$("#crust option:select").val();
var toppins =$("#toppins option:select").val();
var ordernumber =$("ordernumber option:select").val();
var quantity =parseInt(size)*parseInt(crust)*parseInt(toppins)

constructor(size,toppins,crust,order,quantity)
this.size = size;
this.toppins = toppins;
this.crust = crust;
this.order = ordernumber;
this.quantity = quantity;}
$("#size").html($("#size option:selected").text() + " - " + size);
  $("#toppins").html($("#toppins option:selected").text() + " - " + toppins);
  $("#crust").html($("#crust option:selected").text() + " - " + crust);
  $("#quantity").html(quantity);
  $('#button').click(function()
   {
    var size = $("#size option:selected").val();
    var toppins = $("#toppins option:selected").val();
    var crust = $(".crust option:selected").val();
    var quantity = parseInt(size) + parseInt(toppins) + parseInt(crust);
    // order = order + 1;
    // amountt = amountt + total;
    var newPizza = new constructor(size, toppins, crust, total, quantity);
    var newRow = '<tr><th scope="row">' + newPizza.ordernumber + '</th><td id="pizzaSize">' + $(".pizzaSize option:selected").text() + " - " + newPizza.size + '</td><td id="pizzaTopping">' + $(".pizzaTopping option:selected").text() + " - " + newPizza.toppings + '</td><td id="pizzaCrust">' + $(".pizzaCrust option:selected").text() + " - " + newPizza.crust + '</td><td id="quantity">' + newPizza.quantity + '</td></tr>'
    $("#pizza").append(newRow);
  });
  // $("#button").click(function(){
  //   if (quantity === 0) {
  //     prompt("Enter the place where Your pizza will be delivered.");
  //     alert("Thank for choosing pizza I your order will be delivered in the next 20 minutes with a total cost of ksh" + total2.initialCost());
    
  //   } else if (quantity === 1) {
    
  //     alert("Thank you for choosing pizza Inn your cost is ksh " + total3.initialCost());
    }
});













