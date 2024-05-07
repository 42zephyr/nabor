function getBase64FromUrl(url) {
    return new Promise((resolve, reject) => {
        axios.get(url, { responseType: 'arraybuffer' })
            .then(response => {
                const contentType = response.headers['content-type'];
                const base64 = Buffer.from(response.data, 'binary').toString('base64');
                const dataURI = `data:${contentType};base64,${base64}`;
                resolve(dataURI);
            })
            .catch(error => {
                reject(error);
            });
    });
}
getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
    .then(dataURI => {
        console.log(dataURI);
    })
    .catch(error => {
        console.error('Error:', error);
    });