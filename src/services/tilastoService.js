import axios from 'axios'
const urli = 'http://pxnet2.stat.fi/PXWeb/api/v1/fi/StatFin'

export const getStats = async (url = urli) => {
    const stuff = await axios.get(url)
    // console.log(stuff.data)
    return stuff.data
}

