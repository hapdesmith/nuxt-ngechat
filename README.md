# NGECHAT
Simple chatting web application using Nuxt, express, tailwinds, socket.io.
`best view using mobile phone`

## Prerequisite
npm version 14.18.x
node version 6.14.x

## Local Development
1. Setup
    ```bash
    # install dependencies
    $ npm install

    # serve with hot reload at localhost:3000
    $ npm run dev
    ```
2. Open [http://localhost:3000/](http://localhost:3000/)
3. Input username and click 'Enter Chat Room' button
4. Open [http://localhost:3000/](http://localhost:3000/) in other tab
5. Input username and click 'Enter Chat Room' button

## Features
1. type `/help` to show admin interaction commands list
2. send images (.png, .jpg, .gif)
3. send pdf file `view pdf doesn't work in phone. cause using <embed>`
4. to exit room click `log out` button on top right of chat room
5. Delete message (for everyone)

## Todo List
1. Reconnect using same username
2. Download images
3. Kick other user
4. Multiple rooms
5. Whisper spesific user in room
6. Add emoticon in messages
7. Idle, autoDC notif 
