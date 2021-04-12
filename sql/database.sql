CREATE DATABASE dev_finances;

use dev_finances;

create table finances(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    _value DECIMAL(12,2) NOT NULL,
    _date DATE
); 