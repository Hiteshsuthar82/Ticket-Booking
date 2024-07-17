const headerPrise = document.getElementById('total-prise-in-header');
const paySecurlyRate = document.getElementById('pay-securly-rate');

function changeData(){
  const tempTicketDetails = JSON.parse(localStorage.getItem('tempTicketDetails'))
  headerPrise.innerText = localStorage.getItem('prise')*tempTicketDetails.numberOfTickets;
  paySecurlyRate.innerText = localStorage.getItem('prise')*tempTicketDetails.numberOfTickets;
}

window.onload = changeData();