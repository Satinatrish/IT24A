class leafLetMap{
    constructor(containerId, center, zoom){
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountSR= 0;
        this.attendanceCountES= 0;
        this.attendanceCountSK= 0;

        this.markerCounts = {};
        this.markers = [];

        this.loggedData = []; 

        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCount');
        this.logCount1Element = document.getElementById('logCountSA');
        this.logCount2Element = document.getElementById('logCountSK');
        this.idContainer = document.getElementById('logContainer');

        this.btn.addEventListener('click', () => this.dataSr());
        this.btn1.addEventListener('click', () => this.dataEs());
        this.btn2.addEventListener('click', () => this.dataSk());
        this.btnclear.addEventListener('click', () => this.clearLogs());


    }

initTileLayer() {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Sample for new corales BSIT student'
        }).addTo(this.map);
    }
    addMarker(lat, long, message){
        const marker = L.marker([lat, long]).addTo(this.map)
        this.markerCounts[message] = (this.markerCounts[message] || 0) + 1;
        this.updateMarkerPopup(marker, message);
        marker.on('click', () => {
            this.markerCounts[message]++;
            this.updateMarkerPopup(marker, message);
        });
        this.markers.push(marker);
    }
    updateMarkerPopup(marker, message) {
        const count = this.markerCounts[message];
        marker.bindPopup(`${message}<br>Attendance logs: ${count}`).openPopup();
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
      
      clearLogs(){
        this.attendanceCountSR = 0;
        this.attendanceCountES = 0;
        this.attendanceCountSK = 0;

        this.loggedData = [];
        this.markerCounts = {}; 

        this.markers.forEach(marker => {
            const message = marker.getPopup().getContent().split('<br>')[0]; 
            this.markerCounts[message] = 0;
            marker.closePopup(); 

            this.updateMarkerPopup(marker, message)
        });
        this.updateLogDisplay();
    }
        
    displayLogCount() {      
        this.logCountElement.innerHTML = `Satina Residence: ${this.attendanceCountSR}`;
        this.logCount1Element.innerHTML = `Elgie Store: ${this.attendanceCountES}`;
        this.logCount2Element.innerHTML = `Sacred Kubo: ${this.attendanceCountSK}`;
   }
   dataSr() {
    this.addMarker(8.37519444, 124.90347222, 'Satina Residence');
    this.attendanceCountSr++; 
    this.updateLogDisplay();
   }
   dataEs() {
    this.addMarker(8.37569444, 124.90338889, 'Elgie Store');
    this.attendanceCountEs++;
    this.updateLogDisplay();
   }
   dataSk() {
    this.addMarker(8.359774, 124.869308, 'Sacred Kubo');
    this.attendanceCountSk++;
    this.updateLogDisplay();
}
updateLogDisplay() {
    this.idContainer.innerHTML = ''; 
    this.loggedData.forEach(data => {
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        this.idContainer.appendChild(logItem);
    });
    this.displayLogCount();
  }
}
const Mymap = new leafLetMap('map', [8.359735, 124.869206], 18);



Mymap.loadMarkersFromJson('map.json');

document.addEventListener('DOMContentLoaded', () => {
    Mymap.displayLogCount();
    Mymap.loadMarkersFromJson('map.json');
});