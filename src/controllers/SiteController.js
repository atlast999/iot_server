const fetcher = require('axios')
var count = 0
class SiteController {

    //GET - homepage
    homePage(req, res, next){

        var chartData = []
        chartData.push(['6:23', 1000, 400])
        chartData.push(['6:24', 1170, 460])
        chartData.push(['6:25', 660, 1120])    
        chartData.push(['6:26', 1030, 540])
        res.render('home', {data: chartData})
        // fetcher.get('localhost:3000/api/sensors')
        // .then(response => {
        //     listData = response.data
        //     var chartData = [['Time', 'Temperature', 'Humidity']]
        //     res.render('home')
        // })
        // .catch(next)
    }
}

module.exports = new SiteController()