const API_ROOT = 'https://localhost:3000'
//  const API_ROOT = 'https://localhost:3000'

export const supUrl = ""
const refreshTokenUrl = `${API_ROOT}account/refresh-token`


let API = API_ROOT
let IMAGE = API_ROOT + 'upload/'
export const Path = {
  API,
  IMAGE,
  refreshTokenUrl
}