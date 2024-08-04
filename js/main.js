function moveProgressBar(event, progressBarID) {
  var progressBar = document.getElementById(progressBarID);
  var containerWidth = event.currentTarget.offsetWidth;
  var clickPosition = event.clientX - event.currentTarget.offsetLeft;
  var progressWidth = (clickPosition / containerWidth) * 100;
  progressBar.style.width = progressWidth + "%";
}

function downloadPDF() {
  var opt = {
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scrollX: 0, scrollY: 0, scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(document.getElementById("pdf")).save();
}
