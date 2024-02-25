export const userToken = (statusAuthorized) => {


    const getCoockie = () => {
        const cookies = document.cookie

        if(cookies === ''){
            setCoockie(15, statusAuthorized)
        }
    }
    
    const setCoockie = (daysToLive, status) => {
        const currentDate = new Date()

        currentDate.setTime(currentDate.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
        const expires = `expires=${currentDate.toUTCString()}`

        document.cookie = `statusUser=${status}; ${expires}; path=/;`
    }

    getCoockie()
}