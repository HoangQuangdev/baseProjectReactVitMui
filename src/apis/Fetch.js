import axios from "axios"
import jwt_decode from "jwt-decode"
import { Path } from "../utils/constants"
const axiosJWT = axios.create()

const funtionRefreshToken = async (Accesstoken, Refreshtoken) => {
  try {
    const response = await axios.post(Path.refreshTokenUrl, {
      Accesstoken: Accesstoken,
      Refreshtoken: Refreshtoken
    })
    return response.data || null
  } catch (error) {
    // console.log(error)
    return null
  }
}

axiosJWT.interceptors.request.use(
  async (config) => {
    const userLocal = await localStorage.getItem("user_carRental")
    let user = userLocal ? JSON.parse(userLocal) : null

    if (!user) return config
    const { AccessToken, RefreshToken } = user
    const decodedToken = jwt_decode(AccessToken)
    const currentDate = Date.now() / 1000
    if (decodedToken.exp < currentDate) {
      const newAccessToken = await funtionRefreshToken(
        AccessToken,
        RefreshToken
      )
      if (newAccessToken) {
        // console.log("token hết hạn")
        const updatedUser = { ...user, AccessToken: newAccessToken }
        localStorage.setItem("user_carRental", JSON.stringify(updatedUser))
        config.headers["Authorization"] = `Bearer ${newAccessToken}`
      } else {
        localStorage.clear()
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

export const GET_DATA = (Url, handleData, params = false, token = false) => {
  axiosJWT
    .get(Url, {
      params: { ...params },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      let obj = {
        data: res.data,
        status: res.status
      }
      handleData(obj)
    })
    .catch((e) => {
      handleData(e.response)
    })
}
export const POST_JSON = (
  Url,
  Data,
  handleData,
  token = false,
  params = false
) => {
  axiosJWT
    .post(Url, Data, {
      params: { ...params },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      let obj = {
        data: res.data,
        status: res.status
      }
      handleData(obj)
    })
    .catch((e) => {
      handleData(e.response)
    })
}
export const POST_FORM = (
  Url,
  Data,
  handleData,
  token = false,
  params = false
) => {
  axiosJWT
    .post(Url, Data, {
      params: { ...params },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then((res) => {
      let obj = {
        data: res.data,
        status: res.status
      }
      handleData(obj)
    })
    .catch((e) => {
      handleData(e.response)
    })
}
