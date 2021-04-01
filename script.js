document.querySelector('#first-class-plus').addEventListener('click', function(){
  totalTicketPrice(true, 150, 'first-class');
});

document.querySelector('#first-class-minus').addEventListener('click', function(){
  totalTicketPrice(false, 150, 'first-class');
});

document.querySelector('#second-class-plus').addEventListener('click', function(){
  totalTicketPrice(true, 100, 'second-class');
});

document.querySelector('#second-class-minus').addEventListener('click', function(){
  totalTicketPrice(false, 100, 'second-class');
});

document.querySelector('#book').addEventListener('click', function(){
  let ticketFirstClassQuantity = getFieldValue('first-class');
  let ticketSecondClassQuantity = getFieldValue('second-class');
  let total = document.querySelector('#total').innerText;

  let successMessage = document.querySelector('#book-confirm');
  successMessage.setAttribute("style", "display:block;");
  successMessage.innerText = `You are successfully booked ${ticketFirstClassQuantity} First Class Ticket & ${ticketSecondClassQuantity} Economy Class Ticket. Your total cost ${total}. Thanks for booking.`;
})

function totalTicketPrice(isIncrease, amount, ticketClass){
  const ticketClassInput = document.querySelector(`#${ticketClass}-input`);
  let ticketClassCount = parseInt(ticketClassInput.value);

  if(isIncrease){
    newTicketClassCount = ticketClassCount + 1;
  }
  if(!isIncrease && ticketClassCount > 0){
    newTicketClassCount = ticketClassCount - 1;
  }

  ticketClassInput.value = newTicketClassCount;
  total();
}

function total(){
  let ticketFirstClassQuantity = getFieldValue('first-class');
  let ticketSecondClassQuantity = getFieldValue('second-class');

  let subTotal = (ticketFirstClassQuantity * 150) + (ticketSecondClassQuantity * 100);
  document.querySelector('#sub-total').innerText = `$${subTotal}`;

  let tax = Math.round(subTotal * .01);
  document.querySelector('#tax').innerText = `$${tax}`;

  let total = subTotal + tax;
  document.querySelector('#total').innerText = `$${total}`;
}

function getFieldValue(target){
  const field = document.querySelector(`#${target}-input`);
  return parseInt(field.value)
}