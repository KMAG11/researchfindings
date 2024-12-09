const posts = [
    { title: "Post 1", content: "This is the content of post 1.", link: "#" },
    { title: "Post 2", content: "This is the content of post 2.", link: "#" },
    { title: "Post 3", content: "This is the content of post 3.", link: "#" }
];

function loadPosts() {
    const container = document.getElementById("posts-container");
    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";

        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="${post.link}">Read more</a>
        `;
        
        container.appendChild(postDiv);
    });
}

document.addEventListener("DOMContentLoaded", loadPosts);
