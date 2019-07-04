btnGet.addEventListener('click', () => {
  var date = currdate.value.split('-').join('');
  var BASE_URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency.value}&date=${date}&json`;

  const XHR = new XMLHttpRequest();
  XHR.addEventListener('readystatechange', () => {
    if ((XHR.readyState === 4)  && (XHR.status === 200)) {
      var data = JSON.parse(XHR.responseText);
      // res.push(data[0].rate);
      curResult.innerHTML = `<h4>${data[0].rate}`;
    }
  }, false);
  XHR.open('GET', BASE_URL);
  XHR.send();
}, false);
