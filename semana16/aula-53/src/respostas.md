# **Exercicio 1**
### **a:**
temos o retorno das tabelas com um outro montão de informações

### **b:**
~~~~
const searchActor = async (name: string) : Promise<any> => {
  const result = await conection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  console.log(result)
  return result
}

searchActor("Homem Aranha")
~~~~

### **c:**
~~~~
const countActors = async (gender: string) : Promise<any> => {
  const result = await conection.raw(`
    SELECT COUNT(*) AS count FROM Actor WHERE gender = "${gender}"
  `);
  console.log(result)
  const count = result[0][0].count;
  return count;
};

countActors("male")
~~~~




