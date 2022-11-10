const path = require('path')

module.exports = {
    env: {
      API_URL: 'https://3d8efbd1-e448-48a4-9b31-a2add5eccd62.mock.pstmn.io/api/Item/1',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
  }