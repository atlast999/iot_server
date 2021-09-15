const fetcher = require('axios')
class SiteController {

    //GET - homepage
    homePage(req, res, next){
        var chartData = []
        fetcher.get('http://localhost:3000/api/sensors')
        .then(response => {
            const listData = response.data.reverse()
            listData.forEach(sensor => {
                const date = new Date(sensor.createdAt)
                chartData.push([date.toLocaleTimeString('en-US', { hour12: false }), sensor.temperature, sensor.humidity])
                // console.log(date.getHours() + ":" + date.getMinutes())
            })
            res.render('home', {data: chartData})
        })
        .catch(next)
    }
}

module.exports = new SiteController()