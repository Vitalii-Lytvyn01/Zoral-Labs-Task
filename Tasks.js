// Task 1 JavaScript

Date.daysTo = (d1,d2) => {
  if(!(d1 instanceof Date) || !(d2 instanceof Date)) {
    throw (new Error("Both arguments should be valid Date Objects"));
  }
  
  function treatAsUTC(date) {
      let result = new Date(date);
      result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
      return result;
  }
  
  let difference = Math.floor((treatAsUTC(d2) - treatAsUTC(d1)) / 86400000);
  return Math.abs(difference);
}

let orders = [{amount: 10000, quantity: 10}];

for(let i = 0; i < 9; i++) {
	orders.push({
  	amount: Math.round((Math.random() * 50) + 1),
    quantity: Math.round((Math.random() * 5000) + 1),
  })
}

function orderByTotal(order) {
	if(!(order instanceof Array)) {
  	throw(new Error('order argument should be an instance of Array'))
  }
  
  let result = order.map(item => {
  	return {
      ...item,
      Total: item.amount * item.quantity,
    }
  })
  
  result.sort((a,b) => b.Total - a.Total);
  
  return result;
}

function objectProjection(src, proto) {
  const result = {};

  for (const prop in proto) {
    if (proto.hasOwnProperty(prop) && src.hasOwnProperty(prop)) {
      if (typeof proto[prop] === 'object' && proto[prop] !== null) {
        result[prop] = objectProjection(src[prop], proto[prop]);
      } else {
        result[prop] = src[prop];
      }
    }
  }

  return result;
}

// Task 2 REST API

import {GoogleApis} from "googleapis";
//npm install googleapis

let private_key = {
  "type": "service_account",
  "project_id": "badger-chat-3f317",
  "private_key_id": "9a475374b38eec842247b501d03d175cee59696a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDU4PXpY+g/psI6\ncWUhtQi5tcjleP6Re0G+7iiRj6lhmA/udZAMSBI7HOpBHb+sl5DwBUtiKDZGSiWu\n2++6ASBPtQYJORMJ+H7kb4l5vIV9llmIUxEWBRLzFNJ8wkcPvKwJnjw48HJOth6r\n5EYw56Rln1BJPIiKaMdz+foJDxDQK4sx3oyvw+0TNdOvjvg8vPL83oI1EmYEql77\nE0+zU5H8dI8Yb5p/SLLZL+6QhXhLFjyHXd91MCLTR7WBmSuoF/HikXK+Zg1MIMo0\nFIQMBRnptkU1eELyOFzsq+NCOX7olBOpq65V3GWsdS57AkvephMlYmwF0pgZ/XhZ\n8NZqOd5fAgMBAAECggEAFAP62zDrm2CAjqIu0haFdYCkHP9dYCxoqB0Yb2dEk8qK\nZO9k1eLI5An59Jlpdj7h/89foSEKyV0bYe+IAMMuWJA6uw9EvQFCXRQnpuyU2JQU\nYv78ckeT2oswp05VBCPHQThBjVD+TmxNQfg6qUp+aJesItawN+NWLY9pdQSXnhru\nEtMYyuYkssLpwoCFfsq+qhf1BHOF2jGQl3z2YuCDipKpYspAE467kURZkLJfswyA\nTQO3igvw/O2/0ooCLkYOBfQSuKJUnjuWgyfu70R4DJf3Qv0d6Xuy1uzxllwtbL9E\n4e0WLgAPwmNWLufGwYnUAWCFcAkR4KHNbgFqoL5vEQKBgQDysSih7p219DFbBKSJ\n45ngKJUvIgjyZ7dTygVTtqlwvGdACWCMPkyfY4y5B+UWvKm3mBPhWJ7gOEr4++vi\nyIq8tCMjE66NguiYI905wht5Q2uCd8uW9eURxVgXtM8kqtpjDGoDYipTCWMmzxs0\n7azbhpNN6wAu2TXVd0Mof4GpkwKBgQDgjUqp8c0TmqvgONJVyDfeXVvj91h1HtfX\nN3iYCVcFyQ8OMDoPbNKRQfWEQmsFWbyP1vFlUa72oAZtPg93jtyL2ANt9x2l0VqQ\nVugvUVUXV0XdSj80ejkGFHmUaN2bbaOvu9W6xuZt7yKfzI8HRAoFN8F0/mJTlDcj\n7pu0o/dHhQKBgHDQ28OSyatojXzzBo22yLQECX10g9YzUmxXz+wfUFrAqfqBoWjw\nGOxK+YKV4e+U2gwnXK53ZLt0T524denhMWURE/hdUNoljXwTx+XujpjrN1HZ4EEX\no1mEdDPo8BXqekRq4+kYu/YHuhizU8Fh7uXJhDZHVLlybW0C2Kw9wYeTAoGBAK2g\nUmUJVFqeM9vR08EEaT6EzXJ9ZGZbDOWaPKLCRglxJzT/UUVwDXjHmYFEod+nPUez\nGUAQYsrLfWymmesGCb4PrscuVjxKnk4RBMLhjnvXvWuX5zs6bjEnT8LTOtbddb2B\n7YbYGIBUcV9CGi2yDFVwgSNnNrwNVH1yF+8bAS7JAoGBAJNJJ5kEBDg8rSSUbmK3\nCXu7tqW795l5bgn1Pv9fiSRnUKm9YFeHD4bio4dLG3m35/Ws2hAUisMve0oIt+F/\nl8caAvc3o9bugxkzutPCl8+4CzZUKt1PY8q2oxOaOFg2jPgcGOuUCgQ2LzS0K/xV\nrOkDSVZ99jhqZQBiHhqqga5a\n-----END PRIVATE KEY-----\n",
  "client_email": "calendar-api-test@badger-chat-3f317.iam.gserviceaccount.com",
  "client_id": "102309083736340369740",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/calendar-api-test%40badger-chat-3f317.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

async function getBusyIntervals(calendarId, startTime, endTime) {
  const calendar = GoogleApis.calendar('v3');


  const auth = new GoogleApis.auth.GoogleAuth({
    credentials: {
      client_email: 'calendar-api-test@badger-chat-3f317.iam.gserviceaccount.com',
      private_key: private_key,
    },
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });
  const authClient = await auth.getClient();
  GoogleApis.options({ auth: authClient });

  const freebusy = {
    resource: {
      items: [{ id: calendarId }],
      timeMin: startTime.toISOString(),
      timeMax: endTime.toISOString(),
    },
  };

  const response = await calendar.freebusy.query(freebusy);

  const busyIntervals = [];

  if (response.data.calendars) {
    const calendar = response.data.calendars[calendarId];
    if (calendar && calendar.busy) {
      for (const busyInterval of calendar.busy) {
        busyIntervals.push({
          start: new Date(busyInterval.start),
          end: new Date(busyInterval.end),
        });
      }
    }
  }

  return busyIntervals;
}

const calendarId = 'd9dab77a25c43afc525de8713f7f77eea0f078a1e63cfcc52e487fe626d50274@group.calendar.google.com';
const startTime = new Date('2023-05-22T00:00:00Z');
const endTime = new Date('2023-05-25T00:00:00Z');

getBusyIntervals(calendarId, startTime, endTime)
  .then((busyIntervals) => {
    console.log('Busy intervals:', busyIntervals);
  })
  .catch((error) => {
    console.error('Error:', error);
  });