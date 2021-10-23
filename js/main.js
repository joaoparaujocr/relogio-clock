
setInterval(() => {
    let time = new Date();
    let hour = document.getElementById('hour')
    let minute = document.getElementById('minute')
    let second = document.getElementById('seconds');
    hour.textContent = time.getHours();
    minute.textContent = time.getMinutes();
    second.textContent = time.getSeconds();
})