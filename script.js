document.addEventListener('DOMContentLoaded', () => {
    const authorArticles = [
    {
        topic: "About the Game",
        link: "https://www.versobooks.com/blogs/news/5351-half-earth-socialism-the-game",
        comments: "The game offers a sandbox for imagining planetary-scale planning under eco-socialism."
    },
    {
        topic: "Interview",
        link: "https://lbo-news.com/2022/10/17/comments-on-half-earth-socialism/",
        comments: "We should turn half the planet over to nature and radically shift production."
    }
    ];

    const othersArticles = [
    {
        topic: "Monthly Review",
        link: "https://monthlyreview.org/2023/02/01/half-earth-socialism/",
        comments: "It confronts the user with the tension between political will and ecological limits."
    },
    {
        topic: "Steam Comments",
        link: "https://steamcommunity.com/id/midfavila/recommended/2071530/",
        comments: "I love the idea but it’s very guided – forces your hand to reach its utopia."
    },
    {
        topic: "Steam Comments",
        link: "https://steamcommunity.com/profiles/76561199183974238/recommended/2071530/",
        comments: "An interesting take on socialism but lacks open-ended decision space."
    }
    ];

    function renderBibliography(articles, elementId) {
    const list = document.getElementById(elementId);
    articles.forEach(article => {
        const li = document.createElement('li');
        const title = document.createElement('strong');
        title.textContent = `${article.topic}: `;

        const link = article.link
        ? `<a href="${article.link}" target="_blank">${article.link}</a>`
        : '(No link)';

        li.innerHTML = `${title.outerHTML}${link}<br><em>${article.comments}</em>`;
        list.appendChild(li);
    });
    }

    renderBibliography(authorArticles, 'author-bibliography');
    renderBibliography(othersArticles, 'others-bibliography');

  // Canvas drawing
    const canvas = document.getElementById('aestheticGraph');
    if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#eee';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('Aesthetic Lineage', 200, 30);

    ctx.strokeStyle = '#999';
    ctx.beginPath();
    ctx.moveTo(80, 80);
    ctx.lineTo(200, 140);
    ctx.lineTo(320, 80);
    ctx.lineTo(440, 140);
    ctx.stroke();

    const nodes = [
        { x: 80, y: 80, label: 'Soviet Futurism' },
        { x: 200, y: 140, label: 'Retro Data Graphics' },
        { x: 320, y: 80, label: 'Climate Sim Tools' },
        { x: 440, y: 140, label: 'Half-Earth UI' }
    ];

    nodes.forEach(node => {
        ctx.fillStyle = '#f529d6';
        ctx.beginPath();
      ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ccc';
        ctx.font = '12px sans-serif';
        ctx.fillText(node.label, node.x - 40, node.y - 15);
    });
    }

    document.querySelectorAll('section h2').forEach(h2 => {
    h2.style.cursor = 'pointer';
    h2.addEventListener('click', () => {
    const content = h2.nextElementSibling;
    if (content.style.display === 'none') {
        content.style.display = '';
    } else {
        content.style.display = 'none';
    }
    });
});
});