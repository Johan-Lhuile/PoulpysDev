let profile = document.getElementById('profile');
        let showprofile = document.getElementById('showprofile');

        profile.addEventListener("click", (event) => {
            event.stopPropagation();
            showprofile.style.display = "flex";
        });

        function hideProfile(event) {
            showprofile.style.display = "none";
        }

        document.body.addEventListener("click", hideProfile);