document.addEventListener('DOMContentLoaded', () => {
    const MY_USER = 'fabricionovicki';
    
    const els = {
        avatar: document.getElementById('avatar'),
        name: document.getElementById('name'),
        username: document.getElementById('username'),
        bio: document.getElementById('bio'),
        repos: document.getElementById('repos'),
        followers: document.getElementById('followers'),
        following: document.getElementById('following'),
        followBtn: document.getElementById('follow-btn'),
        linkBtn: document.getElementById('link-btn'),
        loader: document.getElementById('loader'),
        searchInput: document.getElementById('search-input'),
        searchBtn: document.getElementById('search-btn'),
        resetBtn: document.getElementById('reset-btn')
    };

    async function getProfile(username) {
        els.loader.style.display = 'flex';
        
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            
            if (!response.ok) throw new Error('Usuário não encontrado');
            
            const data = await response.json();
            updateScreen(data);
        } catch (error) {
            alert('Usuário não encontrado! Tente novamente.');
            console.error(error);
        } finally {
            els.loader.style.display = 'none';
        }
    }

    function updateScreen(data) {
        els.avatar.src = data.avatar_url;
        els.name.innerText = data.name || data.login;
        els.username.innerText = `@${data.login}`;
        els.username.href = data.html_url;
        
        els.bio.innerText = data.bio ? 
            (data.bio.length > 100 ? data.bio.substring(0,100) + '...' : data.bio) 
            : 'Sem biografia disponível';

        els.repos.innerText = data.public_repos;
        els.followers.innerText = data.followers;
        els.following.innerText = data.following;
        
        els.followBtn.href = data.html_url;
        els.linkBtn.href = `${data.html_url}?tab=repositories`;

        if (data.login.toLowerCase() !== MY_USER.toLowerCase()) {
            els.resetBtn.style.display = 'block';
            els.followBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                </svg> Seguir`;
        } else {
            els.resetBtn.style.display = 'none';
            els.followBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg> Seguir`;
        }
    }

    els.searchBtn.addEventListener('click', () => {
        if(els.searchInput.value) getProfile(els.searchInput.value);
    });

    els.searchInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter' && els.searchInput.value) getProfile(els.searchInput.value);
    });

    els.resetBtn.addEventListener('click', () => {
        els.searchInput.value = '';
        getProfile(MY_USER);
    });
    getProfile(MY_USER);
});