import SerpApi from 'google-search-results-nodejs';
import moment from 'moment';
//const apiKey = process.env.EVENT_KEY;
const apiKey = 'a8897393286ab3bb452f34207ad8d00508ab2a4fcf61590f00398793fe8465dc';


const fetchEvents = async (city) => {

  let events = await makeRequest(city, 0);

  const today = moment().startOf('day');
  const todayAbsolute = today.valueOf();

  const futureDate = moment().add(14, 'days').startOf('day');
  const futureDateAbsolute = futureDate.valueOf();

  let found = false;
  let requestNumber = 1;
  while(requestNumber < 10){
    //get next page
    //events.concat(getAllEvents('New York', requestNumber * 10));

    try {
        const nextPageEvents = await makeRequest(city, requestNumber * 10);
        if (nextPageEvents.length === 0) {
          break; // No events found on the next page, stop concatenating
        }
        events = events.concat(nextPageEvents);
    } catch (error) {
        console.error(`${error}, cannot get next page`);
        break; // Error occurred, stop concatenating
    }

    requestNumber++;
  }

  let eventMap = new Map();
  //Create map with the 14 days
  for(let i = 0; i < 14; i++){
    const date = moment().add(i, 'days').startOf('day');
    const dateAbsolute = date.valueOf();
    eventMap.set(dateAbsolute, i);
  }
  console.log(eventMap);

  // Remove events that go over the specified future date
  events = events.filter((event) => {
    const eventDate = moment(event.date.start_date, 'MMM DD').startOf('day');
    const eventDateAbsolute = eventDate.valueOf();
    return eventDateAbsolute < futureDateAbsolute;
  });

  let returnArray = new Array(14).fill(0);
  // Count events for each day of the week
  for(let i = 0; i < events.length; i++){
    const event = events[i];
    const eventDate = moment(event.date.start_date, 'MMM DD').startOf('day');
    const eventDateAbsolute = eventDate.valueOf();

    if(eventMap.has(eventDateAbsolute)){
        returnArray[eventMap.get(eventDateAbsolute)]++;
    }
  }
  console.log(`returnArray: ${returnArray}`);
  console.log(events.length);
  //return events;
  return returnArray;
};

export default async (req, res) => {
  try {
    const {city} = req.query;
    const eventsResults = await fetchEvents(city);
    res.status(200).json(eventsResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function makeRequest(city, pagination){
  const search = new SerpApi.GoogleSearch(apiKey);

  let params = {
    engine: "google_events",
    q: `Events in ${city}`,
    hl: "en",
    gl: "us",
    start: `${pagination}`
  };

  return new Promise((resolve, reject) => {
    search.json(params, (data) => {
      if (data.error) {
        reject(new Error(data.error));
      } else if (data.events_results) {
        resolve(data.events_results);
      } else {
        reject(new Error('No events data found'));
      }
    });
  });
}