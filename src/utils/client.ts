import axios from 'axios'

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/'

export async function get(path: string) {
  const { data } = await axios.get(`${BASE_URL}${path}`)

  return data
}
