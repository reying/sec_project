window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const output = document.querySelector('.output');
    let idInterval;

    function outputingData() {
        idInterval = requestAnimationFrame(outputingData);

        const nowDate = new Date(),
            hour = nowDate.getHours(),
            currentTime = nowDate.toLocaleTimeString('en-US'),
            remaindDay = Math.floor((new Date(`${nowDate.getFullYear() + 1}`) - nowDate) / 1000 / 60 / 60 / 24);

        let salutation,
            currentWeekDay = nowDate.toLocaleString('ru', { weekday: 'long' });

        if (hour < 4) {
            salutation = 'Доброй ночи';
        } else if (hour <= 9) {
            salutation = 'Доброе утро';
        } else if (hour <= 17) {
            salutation = 'Добрый день';
        } else {
            salutation = 'Добрый вечер';
        }

        currentWeekDay = currentWeekDay[0].toUpperCase() + currentWeekDay.slice(1);

        function declensionWord(number, form1, form2, form3) {
            const n = Math.abs(number) % 100,
                n1 = n % 10;
            if (n > 10 && n < 20) { return form3; }
            if (n1 > 1 && n1 < 5) { return form2; }
            if (n1 === 1) { return form1; }
            return form3;
        };

        output.innerHTML = `<p>${salutation}!<br>
            Сегодня: ${currentWeekDay}<br>
            Текущее время: ${currentTime}<br>
            До нового года осталось ${remaindDay} ${declensionWord(remaindDay,'день','дня','дней')}</p>`;
    }
    idInterval = requestAnimationFrame(outputingData);
});