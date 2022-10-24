CREATE TABLE cities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    landmark TEXT,
    cost INTEGER,
    countryid TEXT
);

INSERT INTO cities(name, image, landmark, cost, countryid) VALUES ('Sydney', 'https://mkt-cdn.dynatrace.com/assets/Careers/section-backgrounds/_1920x1078_crop_center-center_82_line/dynatrace-careers-location-sydney-australia-1.jpg.webp', 'Opera House', 4000, 'Australia');