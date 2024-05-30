export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
        bl_lat: '34.654293',
        bl_lng: '25.514642',
        tr_lat: '42.793449',
        tr_lng: '43.185981',
        limit: '300'
    },
    headers: {
        'X-RapidAPI-Key': '493b4f58cfmsh412332041a13998p1e27d1jsn7af646313c17',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
};

export const headers = {
    'X-RapidAPI-Key': '493b4f58cfmsh412332041a13998p1e27d1jsn7af646313c17',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
    'Content-Type': 'application/json',
};