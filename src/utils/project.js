const projects = [
    {
        id: 1,
        type: 'bot',
        title: 'Spy bot',
        description:
            'The spy bot is a bot designed to track people using links.',
        link: 'https://t.me/spytellbot',
        tech: [
            'python/python-original.svg',
            'javascript/javascript-original.svg',
            'mongodb/mongodb-original.svg',
        ],
    },
    {
        id: 2,
        type: 'web',
        title: 'Wistra',
        description: 'Wistra is a web app that displays tourist destinations.',
        link: 'https://wistra.my.id/',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
            'mongodb/mongodb-original.svg',
        ],
    },
    {
        id: 3,
        title: 'Konda 1',
        type: 'web',
        description:
            'Konda Satu is a village website that displays village information.',
        link: 'https://desa.konda-satu.my.id/',
        tech: [
            'express/express-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
            'mongodb/mongodb-original.svg',
        ],
    },
    {
        id: 4,
        type: 'web',
        title: 'Quran Lite',
        description: 'Quran Lite is a web app that displays the Quran.',
        link: 'https://quranlite.vercel.app/',
        tech: ['react/react-original.svg', 'tailwindcss/tailwindcss-plain.svg'],
    },
    {
        id: 5,
        type: 'scraping',
        title: 'Anime API',
        description: "Scraping anime data from otakudesu.to's website.",
        link: 'https://anime-api.asmindev.repl.co/',
        tech: ['python/python-original.svg'],
    },
    {
        id: 6,
        type: 'scraping',
        title: 'Donghua API',
        description: "Scraping anime data from anichin's website.",
        link: 'https://anichin-api.asmindev.repl.co/',

        tech: ['python/python-original.svg'],
    },
    {
        id: 7,
        type: 'web',
        title: 'Douchin',
        description:
            'Douchin is a web app that displays anime and donghua data.',
        link: 'https://dongx.asmindev.me',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
        ],
    },
    {
        id: 8,
        type: 'bot',
        title: 'Telegram Storage',
        description: 'Store your file in telegram with bot',
        link: 'https://github.com/asmindev/telegram-storage/',
        tech: ['express/express-original.svg', 'mongodb/mongodb-original.svg'],
    },
    {
        id: 9,
        type: 'web',
        title: 'Quran Web',
        description: 'Quran web, read quran in everywhere',
        link: 'https://quran.asmindev.me',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
        ],
    },
    {
        id: 10,
        type: 'web',
        title: 'Douchin',
        description: 'watch donghua without ads',
        link: 'https://dongx.asmindev.me',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
        ],
    },
    {
        id: 11,
        type: 'web',
        title: 'Todo List',
        description: 'Simple todo app',
        link: 'https://todo.asmindev.me',
        tech: [
            'nextjs/nextjs-original.svg',
            'tailwindcss/tailwindcss-plain.svg',
        ],
    },
]
const button = projects.map((e) => e.type)
button.unshift('all')

const buttons = [...new Set(button)].map((e, index) => ({
    value: e,
    id: index,
}))
export { projects, buttons }
