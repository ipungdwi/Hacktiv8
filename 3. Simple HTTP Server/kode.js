const http = require('http');

http.createServer(function (req, res) {
    // baris kode untuk request dan mempersiapkan response
    // http header
    // 200 - ok
    // respon dengan konten html, content-type text/html
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Kode Server sudah berjalan');
    res.end();

}). listen(8000);