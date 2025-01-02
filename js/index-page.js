async function generateHistoryContent() {

  const response = await fetch('/data/history.json');
  const historyInfo = await response.json();

  const container = document.getElementById('history-text-1');

  const header = document.createElement('div');
  header.classList.add('history-text-header');
  header.textContent = historyInfo[0].header;
  container.appendChild(header);

  const paragraph = document.createElement('div');
  paragraph.classList.add('history-text-paragraph');
  paragraph.innerHTML  = historyInfo[0].paragraph;
  container.appendChild(paragraph);


  if (historyInfo[0].endNote) {
    const endNote = document.createElement('div');
    endNote.classList.add('history-text-end-note');
    endNote.textContent = historyInfo[0].endNote;
    container.appendChild(endNote);
  }



  const container2 = document.getElementById('history-text-2');
  const header2 = document.createElement('div');
  header2.classList.add('history-text-header');
  header2.textContent = historyInfo[1].header;
  container2.appendChild(header2);

  const paragraph2 = document.createElement('div');
  paragraph2.classList.add('history-text-paragraph');
  paragraph2.innerHTML  = historyInfo[1].paragraph;
  container2.appendChild(paragraph2);


  if (historyInfo[1].endNote) {
    const endNote2 = document.createElement('div');
    endNote2.classList.add('history-text-end-note');
    endNote2.textContent = historyInfo[1].endNote;
    container2.appendChild(endNote2);
  }

}

async function generateOffersContent() {

  const response = await fetch('data/offers.json');
  const offers = await response.json();

  const offersContainer = document.getElementById('offers-info-container');

  offers.forEach(offer => {
    const newOffer = document.createElement('div');
    newOffer.classList.add('offer-item');
    const day = offer.day;
    newOffer.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/offers/${day}.png)`;
    newOffer.innerHTML = `<strong>${day}&nbsp;</strong>${offer.text}`;
    offersContainer.appendChild(newOffer);
  })
}

window.onload = function() {
  generateHistoryContent();
  generateOffersContent();
};
