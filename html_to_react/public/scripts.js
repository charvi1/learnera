document.addEventListener('DOMContentLoaded', function() {
    const playlists = {
        math: [
            { title: 'Algebra Basics', src: 'videos/algebra_basics.mp4' },
            { title: 'Geometry Essentials', src: 'videos/chem.mp4' },
            { title: 'Calculus Introduction', src: 'videos/chrmistry.mp4' }
        ],
        science: [
            { title: 'Physics Fundamentals', src: 'videos/physics.mp4' },
            { title: 'Biology Basics', src: 'videos/locus.mp4' },
            { title: 'Chemistry 101', src: 'videos/maths.mp4' }
        ],
        history: [
            { title: 'Ancient Civilizations', src: 'videos/hello.mp4' },
            { title: 'World War II', src: 'videos/world_war_ii.mp4' },
            { title: 'Modern History', src: 'videos/modern_history.mp4' }
        ]
    };

    for (let subject in playlists) {
        let playlistElement = document.getElementById(subject).querySelector('ul');
        playlists[subject].forEach(video => {
            let li = document.createElement('li');
            li.innerHTML = `
                <h4>${video.title}</h4>
                <video controls>
                    <source src="${video.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            playlistElement.appendChild(li);
        });
    }
});
