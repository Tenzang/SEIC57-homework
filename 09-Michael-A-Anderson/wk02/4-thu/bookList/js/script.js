var books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];

    $(books).each(function(){
        $(`<p>${this.title} by ${this.author}</p>`).appendTo('body');
    });

