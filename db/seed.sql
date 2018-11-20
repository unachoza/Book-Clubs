\c books_dev

-- INSERT INTO books ( title, author, img, genre, page_num, summary) VALUES 
--     (
--     'The Psychology of Optimal Experience',
--     'Mihaly Csikszentmihalyi',
--     '',
--     'Psychology', 
--     322, 
--     'Flow," an experience is a singularly productive and desirable state. But the implications for its application to society are what make the book revolutionary.' 
--     ),
--     ( 
--     'Monster: The Autobiography Of An L.A. Gang Member',
--     'Sanyika Shakur', 
--     '',
--     'Memior', 
--     400, 
--     'After pumping eight blasts from a sawed-off shotgun at a group of rival gang members, twelve-year-old Kody Scott was initiated into the L.A. gang the Crips. '
--     ),
--     ( 
--     'Conflict Is Not Abuse: Overstating Harm, Community Responsibility', 'Sarah Schulman', 
--     '',
--     'Social Psychology', 
--     301,
--     'Difference between Conflict and Abuse. Reveals how punishment replaces personal and collective self-criticism, and shows why difference is so often used to justify cruelty and shunning.'
--     );


INSERT INTO user_profile ( user_name, user_password, email, user_location, books, book_club) VALUES 
    (
    'Arianna',
    'qqqqqq', 
    'unachoza@gmail.com',
    'Brooklyn',
    1, 
    1
    ),
    (
    'Paul', 
    'pppppp', 
    'pauulchoza@gmail.com', 
    'Santa Monica', 
    2, 
    1
    ),
    ( 
    'Andra', 
    'aaaaaa', 
    'andra.lally@gmail.com', 
    'New York', 
    3, 
    1
    );



-- INSERT INTO book_club ( bc_name, bc_description, bc_location, bc_book_id, readers, readers_emails) VALUES 
-- (
--     'Memior Book Club', 
--     'We meet once a week at talk about the lives of remarkable memiorist', 
--     'Starbucks', 
--     2,
--     'paul',
--     'pauulchoza@gmail.com'
--     );
