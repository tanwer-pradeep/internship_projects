const maindiv = document.getElementById('maindiv');
const posts = document.getElementById('posts');

let currpage = 1;
let limit = 5;
let postno = 0;




const getpost = async() =>{
    let resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currpage}`);
    let data = await resp.json();
    // console.log(data);

    data.map(()=>{
        // <div class="post_content">
        const div = document.createElement('div');
        div.setAttribute('class',"post_content");

        // <h3>heading</h3>
        const title = document.createElement('h3');
        title.innerHTML = data[postno].title;

        // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate repellendus numquam

        const body = document.createElement('p');
        body.innerHTML = data[postno].body;
        
        //appending heading
        div.appendChild(title);
        // appending title
        div.appendChild(body);

        // appending post to main container
        posts.appendChild(div);

        postno++;
        
    })
    postno = 0;
}

getpost()

const  getmoredata = () =>{
    setTimeout(() =>{
        currpage++;
        getpost();
    },50);
}

window.addEventListener('scroll', () =>{
    const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
    console.log(clientHeight+scrollTop, scrollHeight);
    if(clientHeight+scrollTop+2 >= scrollHeight) {
        console.log("working")
        getmoredata();
    }
})
