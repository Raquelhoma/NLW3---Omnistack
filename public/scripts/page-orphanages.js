const map = L.map('mapid').setView([-27.2139088,-49.6455749], 15)

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {

    
const popup = L.popup({
    closeButton : false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>`)

L
.marker([lat,lng],{ icon })
.addTo(map)
.bindPopup(popup)
.openPopup()
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})

