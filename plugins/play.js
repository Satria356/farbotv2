const YT = require('../../../lib/yt')
    let handler = async (m, conn, { prefix, text, cmd }) => {
        try {
            if (args.length < 1) return m.reply(`*Fitur mencari Vidio full tag metadata, sangat disarankan unutk memasukkan judul yang tepat*\n${prefix}${cmd} judul - artis\n\ncontoh : ${prefix}${cmd} Garox viral `)
            const arr = await YT.search(args.join(' '))
            let list = new Array();
            let desc = ` *Play Youtube* \nπΏπ€π¬π£π‘π€ππππ§ πππ£πππ£ ππͺπ‘π‘ π©ππ π’ππ©ππππ©π\n\nπΏππ©ππ’πͺπ ππ£  *${arr.length}* *Vidio* `
            for (let i = 0; i < arr.length; i++) {
                list.push({
                    title: `${i + 1}. ${arr[i].title}`,
                    description: `Channel : ${arr[i].artist}\nAlbum : ${arr[i].album}\nDuration : ${arr[i].duration.label}\nSource : ${arr[i].isYtMusic ? 'YouTube Vidio' : 'YouTube'}\nId : ${arr[i].id}`,
                    rowId: `${prefix}ytmp4 ${arr[i].url}`
                });
            }
            await conn.sendListM(
                m.chat,
                { buttonText: 'Video Downloader', description: desc, title: 'Pilih untuk mendownload' },
                list,
                m
            )

        } catch (error) {
            m.reply(util.format(error))
            console.log(error);
        }
    }
}
handler.help = ['play'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.limit = true

module.exports = handler
