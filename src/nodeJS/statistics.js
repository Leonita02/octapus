const express=require('express')
const router=express.Router()
const connection=require('./db_connection')




router.get('/', (req, res) => {
    // Perform the necessary database queries to retrieve the statistics
  
    const registeredUsersQuery = "SELECT COUNT(*) AS registeredUsers FROM Personi p INNER JOIN Useri u ON p.Personi_ID = u.Personi_ID AND u.Roli_ID = 4";
    const totalBooksQuery = "SELECT COUNT(*) AS totalBooks FROM libri";
    const borrowedBooksQuery = "SELECT COUNT(*) AS borrowedBooks FROM libri_lexuesi";
    const borrowedForBookQuery = "SELECT l.Titulli, COUNT(*) AS borrowCount FROM libri_lexuesi lx INNER JOIN libri l ON l.Isbn = lx.Isbn GROUP BY l.Titulli";
    const overdueBooksQuery = "SELECT COUNT(*) AS overdueBooks FROM libri_lexuesi l WHERE l.Data_Kthimit < CURDATE() AND (l.Statusi = 'E huazuar' OR l.Statusi = 'Rinovuar')";
    const popularBooksQuery = "SELECT l.Titulli, COUNT(*) AS borrowCount FROM libri_lexuesi lx INNER JOIN libri l ON l.Isbn = lx.Isbn GROUP BY l.Titulli ORDER BY borrowCount DESC LIMIT 2";
    const avgBorrowDurationQuery = "SELECT AVG(DATEDIFF(lx.Data_Kthimit, lx.Data_Marrjes)) AS avgBorrowDuration FROM libri_lexuesi lx WHERE lx.Data_Kthimit IS NOT NULL";
    const activeUsersQuery = "SELECT p.Emri, p.Mbiemri, COUNT(*) AS borrowCount FROM libri_lexuesi lx INNER JOIN personi p ON p.Personi_ID = lx.Personi_ID GROUP BY p.Emri, p.Mbiemri ORDER BY borrowCount DESC LIMIT 5";
    const bookCategoriesQuery = "SELECT zhanri, COUNT(*) AS bookCount FROM libri GROUP BY zhanri";
    const employeeQuery = "SELECT COUNT(*) AS employeeCount FROM Personi p INNER JOIN Useri u ON p.Personi_ID = u.Personi_ID AND u.Roli_ID = 3";
    const managerQuery = "SELECT COUNT(*) AS managerCount FROM Personi p INNER JOIN Useri u ON p.Personi_ID = u.Personi_ID AND u.Roli_ID = 2";
    const managerWishQuery = "SELECT w.Titulli, w.Autori, COUNT(*) AS NumriKerkesave FROM wishlist w INNER JOIN useri u ON u.Useri_ID = w.Useri_ID GROUP BY w.Titulli, w.Autori";
  
    // Use your database connection to execute the queries
    const statistics = {};
  
    connection.query(registeredUsersQuery, (err, results) => {
      if (err) {
        console.error('Error:', err);
        return res.status(500).json({ error: 'An error occurred while fetching registered users.' });
      }
  
      statistics.registeredUsers = results[0].registeredUsers;
  
      connection.query(totalBooksQuery, (err, results) => {
        if (err) {
          console.error('Error:', err);
          return res.status(500).json({ error: 'An error occurred while fetching total books.' });
        }
  
        statistics.totalBooks = results[0].totalBooks;
  
        connection.query(borrowedBooksQuery, (err, results) => {
          if (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching borrowed books.' });
          }
  
          statistics.borrowedBooks = results[0].borrowedBooks;
  
          connection.query(borrowedForBookQuery, (err, results) => {
            if (err) {
              console.error('Error:', err);
              return res.status(500).json({ error: 'An error occurred while fetching borrowed for each book.' });
            }
  
            statistics.borrowedForBook = results;
  
            connection.query(overdueBooksQuery, (err, results) => {
              if (err) {
                console.error('Error:', err);
                return res.status(500).json({ error: 'An error occurred while fetching overdue books.' });
              }
  
              statistics.overdueBooks = results[0].overdueBooks;
  
              connection.query(popularBooksQuery, (err, results) => {
                if (err) {
                  console.error('Error:', err);
                  return res.status(500).json({ error: 'An error occurred while fetching popular books.' });
                }
  
                statistics.popularBooks = results;
  
                connection.query(avgBorrowDurationQuery, (err, results) => {
                  if (err) {
                    console.error('Error:', err);
                    return res.status(500).json({ error: 'An error occurred while fetching average borrow duration.' });
                  }
  
                  statistics.avgBorrowDuration = results[0].avgBorrowDuration;
  
                  connection.query(activeUsersQuery, (err, results) => {
                    if (err) {
                      console.error('Error:', err);
                      return res.status(500).json({ error: 'An error occurred while fetching active users.' });
                    }
  
                    statistics.activeUsers = results;
  
                    connection.query(bookCategoriesQuery, (err, results) => {
                      if (err) {
                        console.error('Error:', err);
                        return res.status(500).json({ error: 'An error occurred while fetching book categories.' });
                      }
  
                      statistics.bookCategories = results;
  
                      connection.query(employeeQuery, (err, results) => {
                        if (err) {
                          console.error('Error:', err);
                          return res.status(500).json({ error: 'An error occurred while fetching employee count.' });
                        }
  
                        statistics.employeeCount = results[0].employeeCount;
  
                        connection.query(managerQuery, (err, results) => {
                          if (err) {
                            console.error('Error:', err);
                            return res.status(500).json({ error: 'An error occurred while fetching manager count.' });
                          }
  
                          statistics.managerCount = results[0].managerCount;
  
                          connection.query(managerWishQuery, (err, results) => {
                            if (err) {
                              console.error('Error:', err);
                              return res.status(500).json({ error: 'An error occurred while fetching manager wishes.' });
                            }
  
                            statistics.managerWishes = results;
  
                          
                            res.json(statistics);
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  



module.exports=router;