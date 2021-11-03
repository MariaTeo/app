Refer to the `src/pages/home.jsx` file. You can ignore all the other files within this project.

The Challenge

- Using the `getData` method, ensure this is triggered when the component is rendered.
- Add the data from the endpoint into the state `myData`.
- Modify the JSX template to iterate the user data returned from the endpoint and display each users first name, last name and picture.
- Filter the users by the "registered" key value and only display those registered between the year 2000 and the year 2010.
- Bonus: Add a method which allows you to filter the users by typing in the text box. How could you optimise this behaviour to reduce requests?

Example data from the endpoint:

```
{
  "gender": "female",
  "name": { "title": "Ms", "first": "Michelle", "last": "Perkins" },
  "location": {
    "street": { "number": 1408, "name": "Chester Road" },
    "city": "City of London",
    "state": "Merseyside",
    "country": "United Kingdom",
    "postcode": "V1 6PF",
    "coordinates": { "latitude": "18.4551", "longitude": "145.3502" },
    "timezone": { "offset": "-9:00", "description": "Alaska" }
  },
  "email": "michelle.perkins@example.com",
  "login": {
    "uuid": "bbb1213a-2068-4fdf-9e0e-c46f80231a3a",
    "username": "whiterabbit344",
    "password": "11111",
    "salt": "dxH919e7",
    "md5": "67e51284a50ca94fca8c003a68bd7bc5",
    "sha1": "f6cac9b2b6773acb02796a296e73b99e8bf4032c",
    "sha256": "bb729e69bedc5de88c19ffd9d30e751fdae2d292abddb95b6dc698507703768b"
  },
  "dob": { "date": "1968-01-18T09:29:17.529Z", "age": 53 },
  "registered": { "date": "2019-09-16T16:53:21.065Z", "age": 2 },
  "phone": "0151 014 2914",
  "cell": "0794-516-201",
  "id": { "name": "NINO", "value": "BA 17 03 80 P" },
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/50.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/50.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/50.jpg"
  },
  "nat": "GB"
}
```
