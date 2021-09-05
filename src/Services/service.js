export default class Service {

    _menuBasePath = 'http://localhost:3000';
    
    getResource = async (url) => {
        const res = await fetch(`${this._menuBasePath}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getMenu = async () => {
        return this.getResource('/menu');
    }
    
}

