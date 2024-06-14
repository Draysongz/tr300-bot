const {Context, Markup, Telegraf, session} = require('telegraf')
const dotenv = require('dotenv').config()



const botToken = process.env.TG_BOT_TOKEN || '';
const bot = new Telegraf(botToken)



bot.use(session())


bot.start(async(ctx)=>{
    ctx.reply('Welcome to TR300 dex, Please launch the dex below',
        Markup.inlineKeyboard([
            Markup.button.webApp(
                "Launch",
                "https://tr300.vercel.app/"
            )
        ])
    )
})



bot.launch()
