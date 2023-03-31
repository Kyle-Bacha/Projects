let date = new Date(); 
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    let date = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=qUNhaJt8kn4rTT6vXgVcqeVsBbeydjeHJUZ2HNYn&date=${date}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.media_type === 'image'){
                document.querySelector('img').src = data.url
                document.querySelector('img').style.display = "flex"
                document.querySelector("iframe").style.display = "none"
            }
            else if(data.media_type === 'video'){
                document.querySelector('iframe').src = data.url
                document.querySelector("iframe").style.display = "flex"
                document.querySelector("img").style.display = "none"
            }
            document.querySelector('p').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${data}`)
        })
    }