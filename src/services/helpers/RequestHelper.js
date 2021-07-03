const getAxios = () => import('axios')

class RequestHelper {
    constructor() {
        if (!RequestHelper.Singleton) {
            RequestHelper.Singleton = this
        }
        return RequestHelper.Singleton
    }

    async sendGetRequest (url, config = {}) {
        try {
            const axios = await getAxios()
            axios.get(url, config)
        } catch (e) {
            console.error(e)
        }
    }
}

export default new RequestHelper()
