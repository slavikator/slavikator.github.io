btnGet.addEventListener('click', () => {
  var res = [];
  var s_date = startdate.value.split('-').join('');
  var e_date = enddate.value.split('-').join('');
  if (Number(e_date) < Number(s_date)) {
    console.error('Check your date');
    return null;
  }

  for (var i = Number(s_date); i <= Number(e_date); i++) {
    var BASE_URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency.value}&date=${i}&json`;
    const XHR = new XMLHttpRequest();
    XHR.addEventListener('readystatechange', () => {
      if ((XHR.readyState === 4)  && (XHR.status === 200)) {
        var data = JSON.parse(XHR.responseText);
        res.push(data[0].rate);
        var str = res.toString();
        curResult.innerHTML = str;
      }
    }, false);
    XHR.open('GET', BASE_URL);
    XHR.send();
  }
}, false);
