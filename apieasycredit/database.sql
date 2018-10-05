CREATE DATABASE IF NOT EXISTS dbeasycredit;
USE dbeasycredit;

CREATE TABLE users(
	id 		    int(255) auto_increment not null,
	username	varchar(255),
	created_at  datetime DEFAULT NULL,
	updated_at  datetime DEFAULT NULL,
	CONSTRAINT pk_users PRIMARY KEY(id)
)ENGINE=InnoDb;

CREATE TABLE requests(
	id 			int(255) auto_increment not null,
	user_id		int(255) not null,
	quantity	decimal(10,2),
	dead_line	int(255) not null,
	card 		boolean,
	age			int(255) not null,
	total		decimal(10,2),
	status		int(255) not null,
	created_at 	datetime DEFAULT NULL,
	updated_at  datetime DEFAULT NULL,
	CONSTRAINT pk_requests PRIMARY KEY(id),
	CONSTRAINT fk_requests_users FOREIGN KEY (user_id) REFERENCES users(id)
)ENGINE=InnoDb;