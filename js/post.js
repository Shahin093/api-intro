
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}

loadPosts();

function displayPosts(post) {
    const sections = document.getElementById('posts');
    for (const posts of post) {
        // console.log(posts.id);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${posts.title}</h3>
        <p>${posts.body}</p>
        `;
        sections.appendChild(div);
    }

}