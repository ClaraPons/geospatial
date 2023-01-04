require('./models')
const { Toilet } = require('./models')
const publicToilet = require('./sanisettesparis.json')

const createToilet = async() => {
    await Toilet.destroy({ where: {} })

    publicToilet.forEach(async (toilet) => {
        const latitude = toilet.fields.geo_point_2d[0]
        const longitude = toilet.fields.geo_point_2d[1]

        const point = {
            type: 'Point', 
            coordinates: [longitude, latitude]
        }

        const toiletPublic = await Toilet.create({
            address: toilet.fields.adresse, 
            timetable: toilet.fields.horaire, 
            district: toilet.fields.arrondissement,
            position: point,
        })
        console.log(toiletPublic)
    })
}

createToilet()