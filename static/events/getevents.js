const fs = require('fs');

function main() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    var currentDate = new Date(Date.now());
    var currentDay = currentDate.getDate();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;


    var dateString = `${currentYear}-${currentMonth}-${currentDay}T04:00:00-00:00`
    var apiKey = process.env.GOOGLE_API_KEY;

    var data;

    fetch(`https://www.googleapis.com/calendar/v3/calendars/340e64bd33541ee60c89b08ae49281a7dff70abecbb673b54c592742aa964a00%40group.calendar.google.com/events?timeMin=${dateString}&key=${apiKey}`, requestOptions)
        .then(response => response.text())
        .then(results => {
            console.log("we are cooking");
            data = results;
            printableData = JSON.parse(results);
            events = printableData.items;
            fs.writeFile('data/events/events.json', JSON.stringify(events), err =>{
                if(err){
                    console.log(err);
                }
            });
        })
        .catch(error => console.log('error', error));


}

main();
