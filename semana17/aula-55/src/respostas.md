# **Exercicio 1**
### **a:**
o uso de strings ajuda a aumentar o nivel de segurança do id

### **b:**
~~~~
import { v4 } from "uuid";

const id = v4();

console.log("generated Id:, id");

export class IdGenerator {
    public generate(): string {
        return v4();
    }
};
~~~~

# **Exercicio 2**
### **a:**
