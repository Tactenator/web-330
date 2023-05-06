export class HttpClient {
    constructor() {}

    async get(url, params = "") { 
        let newUrl = new URL(url);
        let searchParams = new URLSearchParams(params)
        newUrl.search = searchParams

        const res = await fetch(newUrl.toString() + searchParams.toString(), {
            method: 'GET'
        })

        if(!res.ok) {
            console.log('Error fetching resources')
        } 
        else {
            return res.json()
        }
    }

}