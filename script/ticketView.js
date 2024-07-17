function openTicketDetailPage() {
  window.location =
  "https://paytm-ticket-booking.vercel.app/ticketDetails.html";
  // "http://127.0.0.1:5500/ticketDetails.html";
}

const tripDetailwrapper = document.querySelector(".trip-detail-wrapper");
const paymentwrapper = document.querySelector(".payment-wrapper");
const downArrow1 = document.querySelector(".changing-arrow1");
const downArrow2 = document.querySelector(".changing-arrow2");

let flag1 = 1;
tripDetailwrapper.addEventListener("click", () => {
  if (flag1 == 1) {
    openDialog("trip");
    flag1 = 0;
  } else {
    closeDialog("trip");
    flag1 = 1;
  }
});

let flag2 = 1;
paymentwrapper.addEventListener("click", () => {
  if (flag2 == 1) {
    openDialog("payment");
    flag2 = 0;
  } else {
    closeDialog("payment");
    flag2 = 1;
  }
});

function openDialog(name) {
  if (name == "trip") {
    tripDetailwrapper.classList.remove("open-wrapper");
    downArrow1.classList.add("arrow-up");
    downArrow1.classList.remove("arrow-down");
  }
  if (name == "payment") {
    paymentwrapper.classList.remove("open-wrapper");
    downArrow2.classList.add("arrow-up");
    downArrow2.classList.remove("arrow-down");
  }
}
function closeDialog(name) {
  if (name == "trip") {
    tripDetailwrapper.classList.add("open-wrapper");
    downArrow1.classList.remove("arrow-up");
    downArrow1.classList.add("arrow-down");
  }
  if (name == "payment") {
    paymentwrapper.classList.add("open-wrapper");
    downArrow2.classList.remove("arrow-up");
    downArrow2.classList.add("arrow-down");
  }
}

const activeTicketCount1 = document.getElementById("active-ticket-count-1");
const activeTicketCount2 = document.getElementById("active-ticket-count-2");
const activeStartingStop = document.getElementById("from-location");
const activeEndingStop = document.getElementById("to-location");
const ticketBookingTime = document.getElementById("booking-time");
const orderIdWrapper = document.getElementById("order-id");
const totalTicketCount = document.getElementById("total-tocket-count");
const ticketPrise = document.getElementById("ticket-price");
const totaTicketPrise = document.getElementById("total-ticket-price");
const ticketPriseDetail = document.getElementById("ticket-price-detail");
const totalUpiPayment = document.getElementById("total-upi-payment");

function setActiveTicketDetails() {
  const activeTicketDetails = JSON.parse(localStorage.getItem("ActiveTicket"));
  const formattedTime = dayjs(activeTicketDetails.buyedAt).format("hh:mm A, DD MMM YYYY");
  const orderId = generateOrderId()
  activeTicketCount1.innerText = activeTicketDetails.numberOfTickets;
  activeTicketCount2.innerText = activeTicketDetails.numberOfTickets;
  totalTicketCount.innerText = activeTicketDetails.numberOfTickets;
  activeStartingStop.innerText = activeTicketDetails.from;
  activeEndingStop.innerText = activeTicketDetails.to;
  ticketBookingTime.innerText = formattedTime;
  orderIdWrapper.innerText = orderId;
  totaTicketPrise.innerText = activeTicketDetails.numberOfTickets * activeTicketDetails.prise;
  ticketPrise.innerText = activeTicketDetails.numberOfTickets * activeTicketDetails.prise;
  ticketPriseDetail.innerText = activeTicketDetails.prise;
  totalUpiPayment.innerText = activeTicketDetails.numberOfTickets * activeTicketDetails.prise;
}

function generateOrderId() {
  const prefix = '23';
  const remainingLength = 9; 
  const randomPart = Math.floor(Math.random() * Math.pow(10, remainingLength)).toString().padStart(remainingLength, '0');
  const randomNumber = prefix + randomPart;

  return randomNumber;
}

window.onload = setActiveTicketDetails();
