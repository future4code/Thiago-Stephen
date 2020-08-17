# **Exercicio 1**
### **a:**
esse comando apaga toda a coluna salary da tabela.

### **b:**
esse comando apaga todos os atores que o genero for com (6 caracteres "female")

### **c:**
altera o genero para strings com tamanho de 255

### **d:**
~~~~
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~~

# **Exercicio 2**
### **a:**
~~~~
UPDATE actor
SET name = "Fernanda Monti", birth_date = "1999-05-19"
WHERE id = "003";
~~~~

### **b:**
~~~~
UPDATE actor
SET name = "Juliana Pães"
WHERE name = "Juliana Paes";
~~~~
~~~~
UPDATE actor
SET name = "Juliana Paes"
WHERE name = "Juliana Pães";
~~~~

### **c:**
~~~~
UPDATE actor
SET 
	name = "Markito",
	salry = 7000000, 
    birth_date = "1989-10-17", 
	gender = "female",
    hometown = "Los Angeles",
	favorite_ice = "morango"
WHERE id = "005";
~~~~

# **Exercicio 3**
### **a:**
DELETE  FROM actor WHERE name = "Fernanda Montenegro";

# **b:**
DELETE  FROM actor WHERE gender = "male" and salry > "100000";

# **Exercicio 4**
### **a:**
SELECT MAX(salry) FROM actor;

### **b:**
SELECT MIN(salry) FROM actor WHERE gender = "female";

### **c:**
SELECT COUNT(*) FROM actor WHERE gender = "female"; 

### **d:**
SELECT SUM(salry) FROM actor;

# **Exercicio 5**
### **a:**
ela separa a quantidade de usuarios por genero.

### **b:**
~~~~
SELECT id, name FROM Actor ORDER BY name;
~~~~

### **c:**
~~~~
SELECT * FROM Actor ORDER BY salary;
~~~~

### **d:**
~~~~
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
~~~~

### **e:**
~~~~
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
~~~~
# **Exercicio 6**
### **a:**
~~~~
ALTER TABLE Movies ADD playing_limit_date VARCHAR(255);
~~~~

### **b:**
~~~~
AlTER TABLE Movies CHANGE rating rating FLOAT NOT NULL;
~~~~

### **c:**
~~~~
UPDATE Movies SET playing_limit_date = "2020-08-30" WHERE id = 002;
~~~~

### **d:**
~~~~
DELETE FROM Movies WHERE id = "001";
UPDATE Movies SET synopsis = "teste" WHERE id = "001";
~~~~
estranho que ele volte um resultado positivo. lembro que em aula o professor explicou que seria positivo a resposta pois o sql vai procurar o id 001 assim voltando que foi realizada a busca pelo id 001. 

# **Exercicio 7**
### **a:**
~~~~
SELECT COUNT(*) FROM Movies WHERE rating > 7.5;
~~~~

### **b:**
~~~~
SELECT AVG(rating) FROM Movies;
~~~~

### **c:**
~~~~
SELECT COUNT(*) FROM Movies;
~~~~

### **d:**
~~~~
SELECT COUNT(*) FROM Movies WHERE release_date < CURDATE();
~~~~

### **e:**
~~~~
SELECT MAX(rating) FROM Movies;
~~~~

### **f:**
~~~~
SELECT MIN(rating) FROM Movies;
~~~~

# **Exercicio 8**
### **a:**
~~~~
SELECT * FROM Movies ORDER BY title;
~~~~

### **b:**
~~~~
SELECT * FROM Movies ORDER BY title DESC LIMIT 5;
~~~~

### **c:**
~~~~
SELECT * FROM Movies ORDER BY release_Date DESC LIMIT 3;
~~~~

### **d:**
~~~~
SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;
~~~~






