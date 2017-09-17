$(document).ready(() => {
  $('button .set').click(() => {
    const value = parseInt($('input.text').val(), 10);
    SimpleStorage.set(value);
    console.log('SimpleStorage.set(' + value + ')');
  });

  document.getElementsByClassName('get').addEventListener('click', () => {
    const value = SimpleStorage.get().toNumber();
    $(".value").html(value);
    console.log("SimpleStorage.get()");
  });
});