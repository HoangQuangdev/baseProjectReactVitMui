import { Path } from '../utils/constants'
import { POST_JSON } from './Fetch'

export const Api = {
  _create: Path.API + 'user/create'
}

export const Createuser = (data, handleData) => POST_JSON(Api._create, data, res => {
  handleData(res)
})
