class Message {
    constructor(authorName, messageText) {
        this.authorName = authorName;
        this.time = new Date();
        this.messageText = messageText;
    }

    toString() {
        let hourStr = this.time.getHours() > 9 ? this.time.getHours() : `0${this.time.getHours()}`;
        let minuteStr = this.time.getMinutes() > 9 ? this.time.getMinutes() : `0${this.time.getMinutes()}`;

        return `${hourStr}:${minuteStr} ${this.authorName} : ${this.messageText}`;
    }
}

class Messenger {
    constructor() {
        this._messages = [];
    }

    show_history() {
        for (let i in this._messages) {
            console.log(this._messages[i].toString());
        }
    }

    send(author, text) {
        this._messages.push(new Message(author, text))

    }
}

let messenger = new Messenger()
messenger.send('elmin', 'ilk mesaj')
messenger.send('ferhad', 'İkinci mesaj')
messenger.show_history()