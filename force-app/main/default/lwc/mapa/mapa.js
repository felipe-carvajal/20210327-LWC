import { LightningElement, api} from 'lwc';

export default class LightningMapExample extends LightningElement {
@api mapa_dec;
zoomLevel = 30;
listView = 'visible';
mapMarkers = [
    {
        mapIcon : {
            path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90z',            
            fillColor: 'gold',
            fillOpacity: .8,
            strokeWeight: 0,
            scale: .10
        },
        location: {
            // Location Information
            City: 'TSan Francisco',
            Country: 'USA',
            PostalCode: '94105',
            State: 'CA',
            Street: '50 Fremont St',
        },

        // For onmarkerselect
        value: 'SF1',

        // Extra info for tile in list & info window
        icon: 'standard:account',
        title: 'Julies Kitchen', // e.g. Account.Name
        description: 'This is a long description',
    },
    {
        location: {
            // Location Information
            City: 'San Francisco',
            Country: 'USA',
            PostalCode: '94105',
            State: 'CA',
            Street: '30 Fremont St.',
        },
        mapIcon : {
            path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 Z',            
            
        },
        // For onmarkerselect
        value: 'SF2',

        // Extra info for tile in list
        icon: this.IconName,
        title: 'Tender Greens', // e.g. Account.Name,
        
    },
];

}