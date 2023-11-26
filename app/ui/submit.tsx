import localFont from 'next/font/local'

const DISCORD_WEBHOOK = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK

const robotoRegular = localFont({
    src: "../fonts/Roboto/Roboto-Regular.ttf"
})

function sendSubmit() {

    function getToken() {
        const token: any = sessionStorage.getItem("token");
        return token;
    }

    const twitchValidate = {
        method: 'GET',
        headers: {
            cookie: 'unique_id=7WL2h2UKqq3UxZXf3AcHEbRPwXe2EzXE; unique_id_durable=7WL2h2UKqq3UxZXf3AcHEbRPwXe2EzXE; server_session_id=1c356a8d24984bc6a4a5709acfd12d28; twitch.lohp.countryCode=DE',
            Authorization: `OAuth ${getToken()}`
        }
    };

    fetch('https://id.twitch.tv/oauth2/validate', twitchValidate)
        .then(response => response.json())
        .then(function(response) {
            console.log(response["login"])

            return response;
        })
        .then((response) => {

        const nomineeText: any = document.getElementById("nominee")!.value
        const caseText: any = document.getElementById("case")!.value
        const nominationText: any = document.getElementById("nomination")!.textContent

        const options = {
            method: 'POST',
            headers: {
                cookie: '__dcfduid=6d74976a8a0b11ee9b5a76d9bbb557c7; __sdcfduid=6d74976a8a0b11ee9b5a76d9bbb557c7d886e6808bcbd026cd54e0c1f03c2266d4c91c76007c128007c747ccfb950002; __cfruid=6a1bff671b7ee9b72f285a9ca373f8c620b5e2b0-1700986941; _cfuvid=tT23mUvA0NENcQjboaxc5rGYkAGVNJ4StEV9CuTD7V0-1700986941733-0-604800000',
                'Content-Type': 'application/json'
            },
            body: `{"content": "---------------------\\n**Nomination:** ${nominationText}\\n**Username:** ${response["login"]}\\n**Nominee:** ${nomineeText}\\n**Their case:** ${caseText}"}`
        };
        
        fetch(`${DISCORD_WEBHOOK}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        console.log("Submitted")
        console.log(nomineeText)
        })
}

export default function submit( {title, description, color } ) {
    return (
        <div className="relative">
            <div style={{background: color}} className={`rounded-t-3xl absolute inset-x-0 top-0 h-6`}></div>
            <div className="max-sm:hidden max-w-[434px] min-w-[434px] max-h-[528px] min-h-[528px] max-sm:max-w-[350px] max-sm:min-w-[350px] bg-dark-blue px-10 py-6 rounded-3xl shadow-2xl overflow-hidden">
                <p id="nomination" className="break-words capitalize text-4xl pt-8 max-sm:pt-5 mb-2 max-sm:mb-1 text-center">{title}</p>
                <p className={`${robotoRegular.className} break-words capitalize text-md text-center`}>{description}</p>
                <input required id="nominee" type="text" placeholder="Nominee" className={`${robotoRegular.className} mt-2 w-full pl-2 py-2 placeholder-gray-300 text-gray-100 rounded-xl outline-none ring-2 ring-transparent focus:ring-light-purple bg-slate-700`} />
                <textarea id="case" placeholder="Your case..." className={`${robotoRegular.className} h-40 overflow-scroll overflow-x-hidden overflow-y-auto scrollbar pl-2 py-2 placeholder-gray-300 text-gray-100 mt-6 w-full rounded-xl resize-none appearance-none outline-none border-2 border-transparent focus:border-light-purple bg-slate-700`}></textarea>
                <button onClick={() => sendSubmit()} className="uppercase bg-white rounded-md py-2 px-6 text-dark-blue text-2xl w-44 block mx-auto mt-6">
                    submit
                </button>
            </div>
        </div>
    )
}