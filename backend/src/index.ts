// importando express usando type = module
import express, { response } from "express";
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { convertHourStringToMinuts } from "./utils/convert-hours";
import { convertMinutesToHoursString } from "./utils/convert-minutes";

const app = express();
app.use(express.json());
app.use(cors())

const prisma = new PrismaClient({
    log: ['query']
});


// rota de exibição dos games e quant de anuncios
app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return res.json(games);
})

// criação do anuncio
app.post('/games/:id/ads', async (req, res) => {

    const gameId = req.params.id;
    const body = req.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            nickName: body.nickName,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinuts(body.hourStart),
            hourEnd: convertHourStringToMinuts(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
            createdAt: body.createdAt,
        }
    })

    return res.status(201).json(ad);
})

// rota de exibição de jogos por id
app.get('/games/:id/ads', async (req, res) => {

    const gameId = req.params.id;
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            nickName: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
            useVoiceChannel: true,
            weekDays: true
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return res.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHoursString(ad.hourStart),
            hourEnd: convertMinutesToHoursString(ad.hourEnd),
        }
    }))
});

// rota de exibição de discord
app.get('/ads/:id/discord', async (req, res) => {

    const adId = req.params.id;
    const ad = await prisma.ad.findUniqueOrThrow({ // se não achar id dispara erro
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })


    return res.json({
        discord: ad.discord,
    })
});

app.listen(3333);