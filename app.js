// local reviews data

const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'cook',
        img: "siit.png",
        text:
        'i am baby megging twee suficate the carrykrfjf poorfdvoj fpod ff;d ddjs  health ifthf, bichbihp;ldfj dihiodf pickled jioKLSNC TOTOfdjlifdn',
    },

    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: "sar.png",
        text:
        'i am baby megging twee health ifthf, bichbihp ldfj dihiodf pickled jioKLSNC TOTOfdjlifdn',

    },

    {
        id: 3,
        name: 'peter jonas',
        job: 'intern',
        img:"rico.png",
        text:
        'i am baby megging twee health ifthf, bichbihldfj dihiodf pickled jioKLSNC TOTOfdjlifdn',

    },

    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'path.png',
        text:
        'i am baby megging twee health ifthf, bichbihpldfj dihiodf pickled jioKLSNC TOTOfdbvkd fjkdlan dalnnuf duna foijfd jlifdn',

    },
] 

const canE1 = document.querySelectorAll('.can');

const imgE1 = document.getElementById('img');
const nameE1 = document.getElementById('name');
const jobE1 = document.getElementById('job');
const textE1 = document.getElementById('text');

let currentProfile = 0;

function getProfile () {
    const currentReview = reviews[currentProfile];
    
    imgE1.src = currentReview.img;
    //  you can use both textContent and innerHtml
    nameE1.textContent = currentReview.name
    jobE1.innerHTML = currentReview.job
    textE1.innerHTML = currentReview.text
    
};



canE1.forEach ((cans) => {
    cans.addEventListener('click', (e) => {
        const style = e.currentTarget.classList;
        if(style.contains('prev-btn')){
            currentProfile--;
            getProfile();
        }
        if(style.contains('next-btn')){
            currentProfile++;
            getProfile();
        }

        
    })
})
