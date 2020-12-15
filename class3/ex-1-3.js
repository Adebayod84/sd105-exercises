function loadScript(src) {
  return new  Promise((resolve, reject) => {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
  resolve(`${src} was loaded`)
  script.addEventListener('load', cb);
}
      

loadScript('scripts/transactionList.js')
.then(() => loadScript('scripts/transaction.js'))
.then(() => loadScript('scripts/donStuff.js'))