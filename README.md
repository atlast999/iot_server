1. install nodejs(https://nodejs.org/en/download/)
2. clone this repo(https://github.com/atlast999/iot_server.git)
3. open terminal(in project's root directory) -> npm start
4. (GET) sensors: http://localhost:3000/api/sensors
5. (POST)controll device: http://localhost:3000/api/devices
request body:
{
  "command" : "1"
}
