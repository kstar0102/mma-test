CREATE TABLE fighters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  weight_class VARCHAR(255) NOT NULL,
  nationality VARCHAR(255) NOT NULL,
  team VARCHAR(255) NOT NULL,
  wins INT NOT NULL,
  losses INT NOT NULL,
  knockouts INT NOT NULL,
  submissions INT NOT NULL
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE fights (
  id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events(id),
  fighter1_id INT REFERENCES fighters(id),
  fighter2_id INT REFERENCES fighters(id),
  winner_id INT REFERENCES fighters(id),
);

CREATE TABLE rankings (
  id SERIAL PRIMARY KEY,
  weight_class VARCHAR(255) NOT NULL,
  fighter_id INT REFERENCES fighters(id),
  rank INT NOT NULL
);

