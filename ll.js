class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }

    toString() {
        return this.value;
    }
}

class LinkedList {
    constructor() {
        this.lis = [];
        this.head = null;
        this.tail = null;
    }
    append(value) {
        let newNode = new Node(value);
        if(this.size() == 0) {
            this.head = newNode;
        } else {
            this.lis[this.size()-1].nextNode = newNode;
        }
        this.lis.push(newNode);
        this.tail = newNode;
    }

    prepend(value) {
        let newNode = new Node(value);
        if(this.size() == 0) {
            this.tail == newNode;
        } else {
            newNode.nextNode = this.lis[0];
        }
        this.lis.unshift(newNode);
        this.head = newNode;
    }

     size() {
        return this.lis.length;
     }

     retHead() {
        return this.head;
     }

     retTail() {
        return this.tail;
     }

     retAt(index) {
        return this.lis[index];
     }

     pop() {
        if(this.size() > 1) {
            this.lis[this.size()-2].nextNode = null;
        }
        this.lis.pop();
     }

     contains(value) {
        for(let i = 0; i < this.size(); i++) {
            if(this.lis[i].value == value) {
                return true;
            }
        }
        return false;
     }

     findIndex(value) {
        for(let i = 0; i < this.size(); i++) {
            if(this.lis[i].value == value) {
                return i;
            }
        }
        return -1;
     }

     toString() {
        if(this.head == null || this.tail == null) {
            console.log(`Empty List`);
        } else {
            let str = `(${this.lis[0].value})`;
            for(let i = 0; i < this.size(); i++) {
                str += ` -> (${this.lis[i].nextNode})`;
            }
            console.log(str);
         }
        }
}

let list = new LinkedList();

// console.log(list)
// list.toString();
// console.log(`head is ${list.retHead()}`);
// console.log(`tail is ${list.retTail()}`);
// console.log(`size is: ${list.size()}`);
// list.append("dog");
// list.append("cat");
// list.prepend("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// console.log(`size is: ${list.size()}`);
// console.log(`head is ${list.retHead()}`);
// console.log(`tail is ${list.retTail()}`);
// console.log(`${list.retAt(3).value} is at index 3`);
// // // console.log(list)
// console.log(list.contains('turtle'));
// console.log(`turtle index is ${list.findIndex('turtle')}`);
// list.toString();
// list.pop();
// console.log(list.contains('turtle'));
// console.log(`turtle index is ${list.findIndex('turtle')}`);
// list.toString();
// console.log(list)

