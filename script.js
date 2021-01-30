document.getElementById('first-class').addEventListener('click', function () {
    handleTicketChange('first-class', true);
})

document.getElementById('first-class-decrease').addEventListener('click', function () {
    handleTicketChange('first-class', false);
})

document.getElementById('economy-increase').addEventListener('click', function () {
    handleTicketChange('economy', true);
})

document.getElementById('economy-decrease').addEventListener('click', function () {
    handleTicketChange('economy', false);
})

function handleTicketChange(ticket, isIncreasing) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncreasing == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncreasing == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    calculateTotal();
}


function calculateTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyCount = getInputValue('economy');

    document.getElementById('first-class-ticket').innerText = firstClassCount;
    document.getElementById('economy-ticket').innerText = economyCount;

    const subTotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal-amount').innerText = '$' + subTotal;

    const vat = Math.round(subTotal * .1);
    document.getElementById('vat-amount').innerText = '$' + vat;

    const Total = subTotal + vat;
    document.getElementById('total-amount').innerText = '$' + Total;

    document.getElementById('total-bill').innerText = '$' + Total;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}