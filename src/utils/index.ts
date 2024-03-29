export const getTime = (region: string, city: string) => {
    return new Promise((resolve, reject) => {
        const url = `https://worldtimeapi.org/api/timezone/${region}/${city}`;
        const req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = () =>
            req.status === 200
                ? resolve(req.response)
                : reject(Error(req.statusText));
        req.onerror = (e) => reject(Error(`Network Error: ${e}`));
        req.send();
    });
};
