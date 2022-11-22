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

const articleButtons = document.querySelectorAll('.btn');

const articleImg = document.getElementById('img');
const articleName = document.getElementById('name');
const articleJob = document.getElementById('job');
const articleText = document.getElementById('text');


let currentProfile = 0;

const getProfile = () => {
    if(currentProfile >= reviews.length) currentProfile = 0;
    
    if(currentProfile < 0) currentProfile = reviews.length - 1;


    const currentReview = reviews[currentProfile];
    
    articleImg.src = currentReview.img;
    //  you can use both textContent and innerHtml
    articleName.textContent = currentReview.name
    articleJob.innerHTML = currentReview.job
    articleText.innerHTML = currentReview.text
    
};

articleButtons.forEach ((articlesBtn) => {
    articlesBtn.addEventListener('click', (e) => {

        const {classList} = e.currentTarget;
        if(classList.contains('prev-btn')){
            currentProfile--;
            getProfile();
        }
        if(classList.contains('next-btn')){
            currentProfile++;
            getProfile();
        }
        
    })
})
