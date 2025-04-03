// Data for videos
const videos = [
    {
        thumbnail: 'https://i.ytimg.com/vi/4i0u8x5fXyA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCxgmTOLbSRYq72Fv9eQ03xR41SiQ',
        title: 'Bird and Fish',
        description: 'KCAI ANIM uploaded a video<br>2013 Animation, Senior Graduation Animation.',
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/2IWHpeWCDtM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAogqSTWRwfE7P2NK9ec2DTGXvmAQ',
        title: 'LORE - Bioshock Infinite Lore in a Minute!',
        description: 'Jesse Cox uploaded a video<br>Bioshock Infinite Lore with his best old-timey...',
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/3pE23YTYEZM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDBxsirrj_62yUQ_ljfg5ChMG7H9g',
        title: 'If Your Friends Hated Sports',
        description: 'CollegeHumor uploaded a video<br>Everything. The entire thing.',
    }
];

const videoGrid = document.querySelector('.video-grid');
const sidebarItems = document.querySelectorAll('.menu-item');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// Load videos dynamically
function loadVideos() {
    videoGrid.innerHTML = ''; // Clear existing content

    videos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h2>${video.title}</h2>
            <p>${video.description}</p>
        `;
        videoCard.addEventListener('click', () => openModal(video));
        videoGrid.appendChild(videoCard);
    });
}

// Highlight active sidebar item
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Open modal
function openModal(video) {
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${video.title}</h2>
            <img src="${video.thumbnail}" alt="${video.title}">
            <p>${video.description}</p>
        </div>
    `;
    modal.style.display = 'block';
    document.querySelector('.close').onclick = () => (modal.style.display = 'none');
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

loadVideos();
