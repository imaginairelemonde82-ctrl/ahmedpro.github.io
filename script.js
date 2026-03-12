const downloadBtn = document.getElementById('downloadBtn');
const urlInput = document.getElementById('urlInput');
const formatSelect = document.getElementById('formatSelect');
const statusDiv = document.getElementById('status');

downloadBtn.addEventListener('click', async () => {

  const url = urlInput.value.trim();
  const format = formatSelect.value;

  if(!url){
    alert("Please enter a URL");
    return;
  }

  statusDiv.textContent = "Processing...";

  try{

    const res = await fetch("/download",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body: JSON.stringify({url, format})
    });

    const data = await res.json();

    if(data.download){
      statusDiv.innerHTML = `<a href="${data.download}">Click here to download</a>`;
    }else{
      statusDiv.textContent="Download failed";
    }

  }catch(err){
    statusDiv.textContent="Error: "+err.message;
  }

});