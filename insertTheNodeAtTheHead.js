
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let new_node = new LinkedListNode(data);
    if (head == null) {
        return new_node;
    }
    new_node.next = head;
    head = new_node;
    return head;
}

