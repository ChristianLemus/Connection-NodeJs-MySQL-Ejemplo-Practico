CREATE DATABASE news_portal;

use news_portal;

CREATE TABLE news(

    id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

DESCRIBE news;

INSERT INTO news(id_news, title, news) VALUES ('1','Second Title', 'Content in the news');

SELECT * FROM news;