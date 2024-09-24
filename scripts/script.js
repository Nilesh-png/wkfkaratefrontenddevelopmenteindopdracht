// JavaScript Document
console.log("hi");

/* TRIANGLE */


document.querySelectorAll('button[data-index]').forEach(button => {
  button.addEventListener('click', function() {
    const container = this.parentElement;  // Scrollbare container
    const indicator = document.getElementById('triangleindicator');  // De indicator
    
    // Verwijder de 'active' class van alle knoppen
    document.querySelectorAll('button[data-index]').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    
    // Haal de positie van de knop binnen de container op
    const buttonLeftPosition = this.offsetLeft;  // Positie van de knop t.o.v. de container
    const containerScroll = container.scrollLeft;  // Hoe ver is de container gescrold?
    const buttonWidth = this.offsetWidth;  // Breedte van de knop
    const indicatorWidth = indicator.offsetWidth;  // Breedte van de indicator

    // Bereken de nieuwe positie van de indicator, inclusief de scrollpositie van de container
    const leftPosition = buttonLeftPosition - containerScroll + (buttonWidth / 2) - (indicatorWidth / 2);

    // Update de indicator-positie binnen de container
    indicator.style.left = `${leftPosition}px`;
  });
});