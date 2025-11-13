
// ==================== DATA STRUCTURES (C++ EQUIVALENT) ====================
const INF = Number.MAX_SAFE_INTEGER;

class Node {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}

class Edge {
    constructor(to, weight, roadName) {
        this.to = to;
        this.weight = weight;
        this.roadName = roadName;
    }
}

class HeapNode {
    constructor(vertex, distance) {
        this.vertex = vertex;
        this.distance = distance;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(vertex, distance) {
        this.heap.push(new HeapNode(vertex, distance));
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].distance >= this.heap[parentIndex].distance) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            let minIndex = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;

            if (leftChild < this.heap.length && this.heap[leftChild].distance < this.heap[minIndex].distance) {
                minIndex = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild].distance < this.heap[minIndex].distance) {
                minIndex = rightChild;
            }
            if (minIndex === index) break;

            [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
            index = minIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class PathInfo {
    constructor() {
        this.path = [];
        this.totalTime = INF;
        this.roads = [];
    }
}