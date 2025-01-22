// counter-Design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      stop = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stop);
  }
  counter("count1", 0, 338, 2000);
  counter("count2", 1, 20, 1500);
  counter("count3", 0, 500, 1600);
  counter("count4", 1, 100, 1200);
});
