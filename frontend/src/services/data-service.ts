class DataService {
    private path: string;
    private cache: Record<string, unknown>;
    private cacheClean: boolean;
    private mode: string;

    constructor() {
        const envPath = (typeof import.meta.env.VITE_APP_API_URL !== 'undefined')
            ? import.meta.env.VITE_APP_API_URL
            : undefined;
        this.path = envPath ? envPath : window.location.hostname;
        this.cache = {};
        this.cacheClean = false;
        if (this.path.indexOf('localhost') >= 0 ) {
            this.mode = 'http';
        } else {
            this.mode = 'https';
        }
    }

    async testAPI(): Promise<string | false> {
        try {
            const response = await fetch(`${this.mode}://${this.path}/testAPI`);
            const resultText = await response.text();
            return resultText;
        } catch (err) {
            console.error(`error with testAPI`, err);
        }
        return false;
    }

    async testDB(): Promise<string | false> {
        try {
            const response = await fetch(`${this.mode}://${this.path}/testDB`);
            const resultText = await response.text();
            return resultText;
        } catch (err) {
            console.error(`error with testDB`, err);
        }
        return false;
    }

    async getTopics(): Promise<Record<string, unknown> | false> {
        if (this.cacheClean) {
            return { ...this.cache };
        }
        try {
            const response = await fetch(`${this.mode}://${this.path}/topics`);
            const result = await response.json();
            const keyMap: Record<string, string> = {
                links: 'topicLinks',
                descriptions: 'topicDescriptions',
            };

            const newObject = Object.keys(result).reduce((acc: Record<string, unknown>, key: string) => {
                const newKey = keyMap[key] || key; // Use the new key or fallback to the original
                acc[newKey] = result[key];
                return acc;
            }, {} as Record<string, unknown>);

            this.cache = { ...newObject };
            this.cacheClean = true;
            return newObject;
        } catch (err) {
            console.error(`error with getTopics`, err);
        }
        return false;
    }

    async putTopics(model: string, data: unknown[]): Promise<string | false> {
        const sentData = { docs: data };
        const jsonData = JSON.stringify(sentData);
        try {
            const response = await fetch(`${this.mode}://${this.path}/topics/${model}`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: jsonData,
            });
            const result = await response.text();
            this.cacheClean = false;
            return result;
        } catch (err) {
            console.error(`error with putTopics`, err);
        }
        return false;
    }
}

export default DataService;
