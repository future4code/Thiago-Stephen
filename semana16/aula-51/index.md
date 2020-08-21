# **Exercicio 1**
### **a:**
NOT NULL = nunca podera ser nulo.

### **b:**
SHOW DATABASES = exibe uma tabelinha com o nome da database schema
SHOW TABLES =  exibe a tabela criada

### **c:**
o comando DESCRIBE exibe a tabela e as expecificações de cada coluna. o tipo e por exemplo se ela pode ser null.

# **Exercicio 2**
### **a:**
```
INSERT INTO actor (id, name, salry, birth_date, gender)
VALUES(
	"002",
    "Glória oires",
    1200000,
    "1963-07-23",
    "female"
);
```
### **b:**
- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
ele da o erro de entrada duplicada para o id

- Error Code: 1136. Column count doesn't match value count at row 1
erro que indica que a quantidade de valores não correspondem a quantidade de colunas (falta o nome)

- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
indica que o valor da data está incorreto (acho que por falta de aspas " ")

# **Exercicio 3**
### **a:**
- SELECT * FROM actor WHERE gender = "female"

### **b:**
- SELECT salry FROM actor WHERE name = "Tony Ramos"

### **c:**
- SELECT * FROM actor WHERE gender = "invalid"
ele retornou apenas os campos null

### **d:**
- SELECT id, name, salry <= 500000 FROM actor

### **e:**
- Error Code: 1054. Unknown column 'nome' in 'field list'
esse erro retorna porque não tem a coluna nome na tabela ( na tabela a coluna se chama name)
SELECT id, name from actor WHERE id = "002"

# **Exercicio 4**
### **a:**
- ela seleciona todas as colunas da tabela actor. com nome iniciando com a letra A e ou J com salarios acima dos 300000

### **b:**
- SELECT * FROM actor WHERE (name NOT LIKE "A%" ) AND salry > 350000;

### **c:**
- SELECT * FROM actor WHERE name LIKE "%G%" OR "%g%";

### **d:**
- SELECT * FROM actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR "%g%") AND salry BETWEEN 350000 and 900000;

# **Exercicio 5**
### **a:**
~~~~
CREATE TABLE Films (
	id VARCHAR (255)  PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis TEXT (255) NOT NULL,
    launch_date DATE NOT NULL,
    rated INT NOT NULL
);
~~~~

# **Exercicio 6**
### **b:**
~~~~
SELECT * FROM Movies WHERE title = "Tropa de Elite";
~~~~

### **c:** 
~~~~
SELECT id, title, synopsis FROM Movies WHERE rating > 6;
~~~~

# **Exercicio 7**
### **a:**
~~~~
SELECT * FROM Movies WHERE title LIKE "%vida%";
~~~~

### **b:**
~~~~
SELECT * FROM Movies WHERE title LIKE "%cachorro%" OR synopsis LIKE "%bastante%";
~~~~

### **c:**
~~~~
SELECT * FROM Movies WHERE release_date < "2020-05-04";
~~~~

### **d:**
~~~~
SELECT * FROM Movies WHERE release_date < "2020-05-04" AND (title LIKE "%Tropa%" OR synopsis LIKE "%astro%") AND rating > 7;
~~~~