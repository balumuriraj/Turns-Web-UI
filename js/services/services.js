//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('multimediaService', function () {
    this.getMedia = function () {
        return media;
    };

    var media = [
        {
            id: 1, name: 'Alien', description: 'Picture', type: 'pic', img: '../../images/alien.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'}
            ]
        },
        {
            id: 2, name: 'ALM Banner 1', description: 'Picture', type: 'pic', img: '../../images/alm-1.png',
            views: 456, cools: 23, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'}
            ]
        },
        {
            id: 3, name: 'ALM Banner 2', description: 'Picture', type: 'pic', img: '../../images/alm-2.png',
            views: 56, cools: 34, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'}
            ]
        },
        {
            id: 4, name: 'ALM Banner 3', description: 'Picture', type: 'pic', img: '../../images/alm-3.png',
            views: 34, cools: 1, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'}
            ]
        },
        {
            id: 5, name: 'ALM Banner 4', description: 'Picture', type: 'pic', img: '../../images/alm-4.png',
            views: 23, cools: 13, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'}
            ]
        },
        {
            id: 6, name: 'ALM Banner 5', description: 'Picture', type: 'pic', img: '../../images/alm-5.png',
            views: 45, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'}
            ]
        },
        {
            id: 7, name: 'ALM Banner 6', description: 'Picture', type: 'pic', img: '../../images/alm-6.png',
            views: 65, cools: 13, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'}
            ]
        },
        {
            id: 8, name: 'Birla Temple', description: 'Picture', type: 'pic', img: '../../images/birla.png',
            views: 23, cools: 4, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'}
            ]
        },
        {
            id: 9, name: 'Demo Reel', description: 'Bits of all my work', type: 'video', img: '../../images/bmr.png',
            views: 45, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Cinema 4D', text: 'C4D', background: '#263FA5'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 10, name: 'ifest 09 full', description: 'ifest 09 full', type: 'video', img: '../../images/ifest.png',
            views: 34, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Cinema 4D', text: 'C4D', background: '#263FA5'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 11, name: 'Devil face', description: 'After effects showcase', type: 'video', img: '../../images/devil.png',
            views: 56, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 12, name: 'Dual Role', description: 'After effects showcase', type: 'video', img: '../../images/dual.png',
            views: 676, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 13, name: 'Flash 1', description: 'flash video showcase', type: 'video', img: '../../images/flash-1.png',
            views: 789, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Flash', text: 'Fl', background: '#f06060'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 14, name: 'Flash 2', description: 'flash video showcase', type: 'video', img: '../../images/flash-2.png',
            views: 98, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Flash', text: 'Fl', background: '#f06060'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 15, name: 'Gamer', description: 'Short film', type: 'video', img: '../../images/gamer.png',
            views: 23, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 16, name: 'Gitam - Part 1', description: 'Short film', type: 'video', img: '../../images/gitam.png',
            views: 545, cools: 32, url: '/', created: 2010,
            tags: [
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 17, name: 'Gitam - Part 2', description: 'Short film', type: 'video', img: '../../images/gitam.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 18, name: 'Hyderabad', description: 'Photoshop and After Effects', type: 'video', img: '../../images/hyd.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Photoshop', text: 'Ps', background: '#0099cc'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'}
            ]
        },
        {
            id: 19, name: 'I am Mike', description: 'Trailer', type: 'video', img: '../../images/iammike.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Cinema 4D', text: 'C4D', background: '#263FA5'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 20, name: 'I am Mike - short', description: 'short clip', type: 'video', img: '../../images/iammike2.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Cinema 4D', text: 'C4D', background: '#263FA5'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 21, name: 'ifest', description: 'Inauguration video', type: 'video', img: '../../images/ifest.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Cinema 4D', text: 'C4D', background: '#263FA5'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 22, name: 'itsa', description: 'Inauguration video', type: 'video', img: '../../images/itsa.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Cinema 4D', text: 'C4D', background: '#263FA5'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 23, name: 'Mindtree Banner', description: 'Banner for Mindtree team', type: 'video', img: '../../images/joy.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'}
            ]
        },
        {
            id: 24, name: 'Manchester United', description: 'short video on Man Utd', type: 'video', img: '../../images/manutd.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Cinema 4D', text: 'C4D', background: '#263FA5'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 25, name: 'Mindtree Batch 2010', description: 'short video on Mindtree Campus Batch 2010', type: 'video', img: '../../images/mindtree.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 26, name: 'MR Studios', description: 'Logo Animation', type: 'video', img: '../../images/mrstudios.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 27, name: 'Source Trailer', description: 'short video on Man Utd', type: 'video', img: '../../images/source.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Cinema 4D', text: 'C4D', background: '#263FA5'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 28, name: 'WALS - Mindtree', description: 'short video on WALS team', type: 'video', img: '../../images/wals.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Photoshop', text: 'Ps', background: '#0099cc'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 29, name: 'Intro Video', description: 'Intro Video', type: 'video', img: '../../images/hearthealthy.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 30, name: 'Highlight Reel', description: 'Highlight Reel', type: 'video', img: '../../images/highlightreel.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 31, name: 'Intro Video', description: 'Intro Video', type: 'video', img: '../../images/alm-intro2.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 32, name: 'Intro Video', description: 'Intro Video', type: 'video', img: '../../images/kearms-intro.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 33, name: 'Intro Video', description: 'Intro Video', type: 'video', img: '../../images/alm-int-short.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        },
        {
            id: 34, name: 'Intro Video', description: 'Intro Video', type: 'video', img: '../../images/alm-intro.png',
            views: 10, cools: 5, url: '/', created: 2010,
            tags: [
                { name: 'Illustrator', text: 'Ai', background: 'orange'},
                { name: 'After Effects', text: 'Ae', background: '#5A2E99'},
                { name: 'Premier Pro', text: 'Pr', background: '#942E99'}
            ]
        }
        
    ];

});