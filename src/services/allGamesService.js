import $api from "../http"

class AllGamesService{
    async fetchGames (page, genre, isFreshGamesFirst, gamesToShow) {
        try {
            // return $api.get(`/games?page=${page}&genre=${genre}&isFreshGamesFirst=${isFreshGamesFirst}&gamesToShow=${gamesToShow}`)
            return $api.post(`/games`, {page, gamesToShow, isFreshGamesFirst, genre})
            // return axios.post('https://api.miraplay.cloud/games/by_page', { 
            //     "page": page,
            //     "isFreshGamesFirst": isFreshGamesFirst,
            //     "genre": genre,
            //     "gamesToShow": gamesToShow,
            //   }
            //   )
        } catch(e) {

        }
    }  
}

const allGamesService = new AllGamesService()
export default allGamesService