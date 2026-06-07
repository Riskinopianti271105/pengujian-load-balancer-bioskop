
# Sistem Reservasi Bioskop Online Menggunakan NGINX dan Docker
## Nama : RISKI NOPIANTI
## NIM: 105841116523
## Kelas: 6A-SCALABLE SYSTEM DESIGN

## Deskripsi

Proyek ini merupakan implementasi load balancing menggunakan NGINX dan Docker pada Sistem Reservasi Bioskop Online.

Sistem terdiri dari tiga backend server yang berjalan di dalam container Docker dan satu NGINX Load Balancer yang bertugas mendistribusikan request menggunakan algoritma:

- Round Robin
- Least Connection

---

## Arsitektur Sistem

Client mengakses aplikasi melalui NGINX Load Balancer.

NGINX kemudian meneruskan request ke salah satu backend server:

- App1 : Server Film dan Jadwal
- App2 : Server Booking Tiket
- App3 : Server Pembayaran

 
---

## Teknologi yang Digunakan

- Node.js
- Express.js
- Docker
- Docker Compose
- NGINX

---

## Struktur Folder

```PENGUJIAN SSD
│
├── app
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── nginx
│   ├── nginx.conf
│   └── nginx-least-connection.conf
│
├── pengujian-load-balancer
│   └── uji-load-balancer.ps1
│
└── docker-compose.yml

Menjalankan Proyek
Clone Repository: git clone https://github.com/Riskinopianti271105/pengujian-load-balancer-bioskop.git
Masuk Folder: cd pengujian-load-balancer-bioskop
Jalankan Docker: docker compose up --build

Akses Aplikasi
Halaman utama: http://localhost:8080
API Status: http://localhost:8080/api/status

Pengujian Round Robin
Konfigurasi: nginx/nginx.conf
Round Robin merupakan algoritma default NGINX.

Pengujian Least Connection
Konfigurasi: nginx/nginx-least-connection.conf
Menggunakan directive: least_conn;

Hasil
Sistem berhasil:
Menjalankan tiga backend server menggunakan Docker
Mengimplementasikan NGINX sebagai Load Balancer
Menguji algoritma Round Robin
Menguji algoritma Least Connection