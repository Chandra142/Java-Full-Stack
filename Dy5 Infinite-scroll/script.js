

// Test@123

const main = document.getElementById('main')
// secret_key = "b_DepFoF_y2FRObxUUtqQPXllqDqrCOE0llb9rKH03g"
const ACCESS_KEY = "_auuwtVa_OUwgAnxWNhni4joem94ajxUPypt-2Pm6qA"
// photos/?client_id=YOUR_ACCESS_KEY

const baseUrl = "https://api.unsplash.com/"

const scrollThreshhold = window.innerHeight/2
const hasUserScrolledTillThreshold = false


function getAndPopulatePhoto(){
    const url = baseUrl + "photos/?" + `client_id=${ACCESS_KEY}`
    console.log(url)
    const promiseObject =  fetch(url)

    promiseObject.then(res => res.json()).then(data =>{
        //console.log(data)
        for(var i = 0; i<data.length;i++){
            const currPic = data[i]
            const smallImageLink = currPic.urls.small
            const imageTag = document.createElement('img')
            imageTag.src = smallImageLink
            imageTag.classList.add('my-image')
            main.appendChild(imageTag)
        }
    }).catch(err=>{
        console.log(err)
    })


    console.log(promiseObject)
}

getAndPopulatePhoto()
function scrollHandler(){
    var scrolledHeight = window.scrollY
    if(scrolledHeight >= scrollThreshhold && !hasUserScrolledTillThreshold){
        getAndPopulatePhoto();
    }
    else{
        hasUserScrolledTillThreshold = false
    }
}
document.addEventListener('scroll',scrollHandler)