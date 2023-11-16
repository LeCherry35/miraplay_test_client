import axios from "axios"

class AllGamesService{
    async fetchGames (page, genre, isFreshGamesFirst, gamesToShow) {
        try {

            return axios.post('https://api.miraplay.cloud/games/by_page', { 
                "page": page,
                "isFreshGamesFirst": isFreshGamesFirst,
                "genre": genre,
                "gamesToShow": gamesToShow,
              }
              )
        } catch(e) {

        }
    }  
}

const allGamesService = new AllGamesService()
export default allGamesService