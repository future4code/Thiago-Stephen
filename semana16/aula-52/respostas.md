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