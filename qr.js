/* Copyright (C) 2021 Karthik_terror-boy.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhiteDevil - Karthik_terror-boy
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [3, 3234, 9]
  const rows = [
 {title: 'DADA Owner:-', description: "\n\n*number click the link ➡️ https://wa.me/message/NTMRGW7FESALN1*", rowId:"wd1"},
 {title: 'Password in heroku:-', description: "\n\nThis bot have no password", rowId:"wd2"},
 {title: 'DADA BOT support group:-', description: "\n\n*https://chat.whatsapp.com/CmE3aGdrhJUBmcIFNS09sQ*", rowId:"wd3"}
]

const sections = [{title: "please check it", rows: rows}]

const button = {
 buttonText: 'Click Me Here!',
 description: "*Hello,Thank you for using DADA*\n\n ```please check it```",
 sections: sections,
 listType: 1
}


  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('KING AS')}${chalk.green.bold('-DADA')}
${chalk.white.italic('DADA String code recipient')}
${chalk.blue.bold('ℹ️  Connecting WHATSAPP... Please wait.')}`);
  });

  conn.on('open', async () => { 
    console.log(
      chalk.green.bold('DADA QR Code: '),
      'DADA;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'DADA;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '*~___________~* *'+ conn.user.name + ' ~___________~*\n\n*▪️ DADA QR Successfully Scanned✅️*\n*▪️Thanks For Choosing DADA BOT 💞*',
        MessageType.text
      );
      await conn.sendMessage(
        conn.user.jid, fs.readFileSync("./Audio.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true});
        await conn.sendMessage( conn.user.jid, button, MessageType.listMessage);
        await conn.sendMessage(
        conn.user.jid,
        '*~___________~* *'+ conn.user.name + ' ~___________~*\n\n*THIS IS ANNOUNCEMENT MESSAGE*\n\n*THERE WILL BE NO REPLY FROM MY OWNWER FOR MONDAY-FRIDAY BECAUSE OF BUSY IN CLASS* \n\n *YOU CAN REPORT BUGS & ERRORS IN SECOND OWNER NUMBER ➡️ https://wa.me/qr/HS3QLQZF67FXC1* \n\n\n\n           --- *BOT OWNER*',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*~__~* *'+ conn.user.name + ' ~__~*\n\n*▪️ DADA QR Successfully Scanned✅️*\n*▪️Thanks For Choosing DADA BOT 💞*',
        MessageType.text
      );
      await conn.sendMessage(
        conn.user.jid, fs.readFileSync("./Audio.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true});
        await conn.sendMessage( conn.user.jid, button, MessageType.listMessage);
        await conn.sendMessage(
        conn.user.jid,
        '*~__~* *'+ conn.user.name + ' ~__~*\n\n*THIS IS ANNOUNCEMENT MESSAGE*\n\n*THERE WILL BE NO REPLY FROM MY OWNWER FOR MONDAY-FRIDAY BECAUSE OF BUSY IN CLASS* \n\n *YOU CAN REPORT BUGS & ERRORS IN SECOND OWNER NUMBER ➡️ https://wa.me/qr/HS3QLQZF67FXC1* \n\n\n\n           --- *BOT OWNER*',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "\n\n Nigalkku sandesham pakarthan \n kaliyunnillegil,whatsapp parishodikkuka \n nigalude numberillekku  code ayachinnu!\n\n\n\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
