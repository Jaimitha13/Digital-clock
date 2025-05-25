function update() {
    const now = new Date();
    let hours = now.getHours();

    let ampm = hours >= 12;
    if (hours >= 12) {
        ampm = ": PM";

    }
    else {
        ampm = " : AM";
    }


    if (hours === 0) {
        hours = 12;
    }

    else if (hours > 12) {

        hours = hours - 12;

    }

    const mins = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');


    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const daynum = now.getDate();
    const year = now.getFullYear();

    document.getElementById('hr').textContent = hours.toString().padStart(2, '0');
    document.getElementById('min').textContent = mins;
    document.getElementById('sec').textContent = sec;
    document.getElementById('ampm').textContent = ampm;
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('daynum').textContent = daynum;
    document.getElementById('year').textContent = year;
}

update();
setInterval(update, 1000);  