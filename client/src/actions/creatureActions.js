import axios from 'axios'

export const fetchCreatures = () => {
    return (dispatch) => {
        axios.get(`/api/creatures`)
        .then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }
}