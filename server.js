const http = require("http");
const port = 3000;
const hostname ="127.0.0.1";
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const server = http.createServer((req,res) =>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	if (req.url) {
		const data ={
  "slack_name": "victor mwachi",
  "current_day": weekDays[new Date().getDay()],
  "utc_time": new Date().toISOString(),
  "track": "backend",
  "github_file_url": "https://github.com/VictorMwachi/zuri-backend-task-one/blob/master/server.js",
  "github_repo_url": "https://github.com/VictorMwachi/zuri-backend-task-one/",
  "status_code": 200
		}
}
	res.end(JSON.stringify(data));
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
