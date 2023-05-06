export class HttpClient {
    constructor() {}

    async get(url, params = "") { 
        let newUrl = new URL(url);
        let searchParams = new URLSearchParams(params)
        // This is where the mistake was. I didn't realize I had to call the url.search separately. I though it needed to be in the parameters. 
        //Got it fixed though!
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