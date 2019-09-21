import axios from 'axios'

const apiRepos = axios.create({
  baseURL: 'https://api.github.com/search/repositories?q='
})

export { 
  apiRepos
}