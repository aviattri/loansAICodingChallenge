create table CUSTOMER
(
    ID integer primary key,
    NAME VARCHAR(255) not null,
    AMOUNT VARCHAR(255) not null,
    BROKER_ID integer not null REFERENCES BROKER(BROKER_ID)
)
;

create table BROKER
(
    BROKER_ID integer primary key,
    NAME VARCHAR(255) not null

)
;

insert into CUSTOMER
    (ID,NAME, AMOUNT, BROKER_ID)
values
    (1, 'sam', 3000, 4),
    (2, 'john', 4000, 2),
    (3, 'mack', 5000, 2),
    (4, 'test', 3000, 3),
    (5, 'june', 2000, 3),
    (6, 'mike', 4000, 1),
    (7, 'annie', 4000, 2),
    (8, 'micheal', 2000, 1),
    (9, 'tom', 2000, 4),
    (10, 'jason', 6000, 4)
;

insert into BROKER
    (BROKER_ID,NAME)
values
    (1, 'Ted'),
    (2, 'Mark' ),
    (3, 'Aaron' ),
    (4, 'Luke' )
;