const http = require("http");
const port = 3000;
const hostname ="127.0.0.1";
const date = new Date();
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const data ={
  "slack_name": "victor mwachi",
  "current_day": weekDays[new Date().getDay()],
  "utc_time": new Date().toISOString(),
  "track": "backend",
  "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
  "github_repo_url": "https://github.com/username/repo",
  "status_code": 200
}
const server = http.createServer((req,res) =>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
