'use client'

import { useState, useEffect } from 'react'

export default function logout() {
    const [token, setToken] = useState("Undefined")

    useEffect(() => {
        const token: any = sessionStorage.getItem("token");
        setToken(token)
    }, []);
    
        const twitchValidate = {
            method: 'GET',
            headers: {
                cookie: 'unique_id=7WL2h2UKqq3UxZXf3AcHEbRPwXe2EzXE; unique_id_durable=7WL2h2UKqq3UxZXf3AcHEbRPwXe2EzXE; server_session_id=1c356a8d24984bc6a4a5709acfd12d28; twitch.lohp.countryCode=DE',
                Authorization: `OAuth ${token}`
            }
        };

        fetch('https://id.twitch.tv/oauth2/validate', twitchValidate)
            .then(response => response.json())
            .then(function(response) {
                const usernameText: any = document.getElementById("usernameText")
                usernameText.textContent = `${response["login"]}`

                return response;
            })
            .then((response) => {
                const twitchClaims = {
                    method: 'GET',
                    headers: {
                        cookie: 'unique_id=7WL2h2UKqq3UxZXf3AcHEbRPwXe2EzXE; unique_id_durable=7WL2h2UKqq3UxZXf3AcHEbRPwXe2EzXE; server_session_id=1c356a8d24984bc6a4a5709acfd12d28; twitch.lohp.countryCode=DE',
                        Authorization: `Bearer ${token}`,
                        'Client-Id': `${response["client_id"]}`
                    }
                };

                fetch(`https://api.twitch.tv/helix/users?id=${response["user_id"]}`, twitchClaims)
                    .then(response => response.json())
                    .then(response => response["data"][0]["profile_image_url"])
                    .then(response => `<img src="${response}" width="150" height="150" alt="Picture of the user" />`)
                    .then(function(response) {
                        const profilePicture: any = document.getElementById("ProfilePicture")
                        profilePicture.innerHTML = response
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));

    return (
        <div className="bg-dark-blue px-10 py-6 m-16 rounded-lg">
                <div id="ProfilePicture" className="rounded-full overflow-hidden flex flex-col items-center">
                    Loading...
                </div>
                <p id="usernameText" className="m-1 mb-10 text-center font-extrabold text-lg max-w-[144px] break-words">
                    Loading...
                </p>
                <a href="/">
                    <button onClick={() => sessionStorage.clear()} className="uppercase bg-white rounded-md py-1 text-dark-blue text-2xl block mx-auto w-36 mb-4">
                        logout
                    </button>
                </a>
                <a href="/">
                    <button className="uppercase bg-white rounded-md py-1 text-dark-blue text-2xl block mx-auto w-36">
                        home
                    </button>
                </a>
        </div>
    )
}