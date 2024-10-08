class leafLetMap{
    constructor(containerId, center, zoom){
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountSA= 0;
        this.attendanceCountES= 0;
        this.attendanceCountSK= 0;

        this.markerCounts = {};
        this.markers = [];

        this.loggedData = []; 



    }

initTileLayer() {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Sample for new corales BSIT student'
        }).addTo(this.map);
    }
    addMarker(lat, long, message){
        const marker = L.marker([lat, long]).addTo(this.map)
        .bindPopup(message);
    }
        loadMarkersFromJson(url) {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.message);
                });
            })
            .catch(error => console.error("Error Loading servers:", error));
        }
     
    }

const Mymap = new leafLetMap('map', [8.359735, 124.869206], 18);


Mymap.addMarker(8.37519444, 124.90347222, "Satina Residence");
Mymap.addMarker(8.37569444, 124.90338889, 'Elgie Store');
Mymap.addMarker(8.359774, 124.869308, 'Sacred Kubo');

Mymap.loadMarkersFromJson('map.json');