const maindiv = document.getElementById('maindiv');
const posts = document.getElementById('posts');

let currpage = 1;
let limit = 5;
let postno = 0;




const getpost = async() =>{
    let resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currpage}`);
    let data = await resp.json();
    console.log(data);

    data.map(()=>{
        // <div class="post_content">
        const div = document.createElement('div');
        div.setAttribute('class',"post_content");

        // <h3>heading</h3>
        const title = document.createElement('h3');
        title.innerHTML = data[postno].title;
        // console.log(data)

        // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate repellendus numquam
        //     tenetur deleniti, molestiae voluptas cupiditate nobis fugit. Alias, adipisci. Culpa voluptatum nobis
        //     deleniti iure minima ex autem nulla?</p>

        const body = document.createElement('p');
        body.innerHTML = data[postno].body;

        div.appendChild(title);
        div.appendChild(body);
        posts.appendChild(div);
        postno++;
    })
}

getpost()
