import Image from 'next/image'

export default function login() {
    const TWITCH_CLIENT_ID = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID
    const redirectUri = "http://localhost:3000/signin"
    const scope = "user:read:email+openid"

    const url = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${TWITCH_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&state=c3ab8aa609ea11e793ae92361f002671&nonce=c3ab8aa609ea11e793ae92361f002671&response_mode=form_post`

    return (
            <div className=" bg-dark-blue px-10 py-6 m-16 rounded-lg">
                <div className="rounded-full overflow-hidden flex flex-col items-center justify-center">
                    <Image 
                        src="/pfp.png"
                        width={150}
                        height={150}
                        alt="Picture of the user"
                    />
                </div>
                <p className="m-1 mb-10 text-center font-extrabold text-lg">chatter</p>
                <a href={url}>
                    <button className="uppercase bg-white rounded-md py-1 px-4 text-dark-blue text-2xl w-36 block mx-auto">
                        login
                    </button>
                </a>
            </div>
    )
}