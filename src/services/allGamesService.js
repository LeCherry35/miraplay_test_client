import axios from "axios"
import $api from "../http"

class AllGamesService{
    async fetchGames (page, genre, isFreshGamesFirst, gamesToShow) {
        try {
            return $api.post('/games/fetchGames', {page, genre, isFreshGamesFirst, gamesToShow})
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